import { ThemeTypings } from '@chakra-ui/styled-system'
import { useEffect, useState } from 'react'

import {
    ChakraProvider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'

import { FormComponent } from '../form'
import { GET_FORM_FIELDS } from './form_fields'
import { decodeJWTToken } from '../helpers'
import { Api } from "../../api";

interface WidgetSettings {
    bg_color: ThemeTypings['colorSchemes']
    button_bg_color: ThemeTypings['colorSchemes']
    partner: 'Equifax' | string
    product: 'Employment' | string
    title: string
    origin: string
    api_key: string
    job_name: string
    execution_id: string
}

interface Props {
    token: string
    onComplete: (result: any) => any
    onError: () => any
}

export const WidgetComponent = (props: Props) => {
    const { token, onComplete, onError } = props

    const [widgetSettings, setWidgetSettings] = useState<WidgetSettings>()
    const [styles, setStyles] = useState<any>()
    const [requestPayload, setRequestPayload] = useState<any>()
    const [api, setApi] = useState<any>()
    const [outputs, setOutputs] = useState<any>()
    const [product, setProduct] = useState<string>()
    const [partner, setPartner] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        const decodedToken: any = decodeJWTToken(token)
        setWidgetSettings(decodedToken)
    }, [])

    useEffect(() => {
        if (widgetSettings) {
            if (!requestPayload) {
                setInvocationRequestPayload()
            }
            if (!api) {
                const { origin, api_key } = widgetSettings
                setApi(new Api(origin, api_key))
            }
        }
    }, [widgetSettings])

    useEffect(() => {
        if (requestPayload) {
            const { styles: rpStyles, product, partner } = requestPayload
            setStyles(rpStyles)
            setProduct(product)
            setPartner(partner)
        }
    }, [requestPayload])

    useEffect(() => {
        if (product && partner) {
            onOpen()
            initCheckInvocation()
        }
    }, [product, partner])

    // ONCE FORM COMPLETED
    const onFormComplete = async (values: any) => {
        if (!widgetSettings) {
            return
        }
        const { job_name, execution_id } = widgetSettings
        if (values.includes('pfx_certificate')) {
            try {
                const {
                    url
                } = outputs.CreateBlob.response_payloadpresigned_urls.upload
                await api.uploadFile(url, values['pfx_certificate'])
                delete values['pfx_certificate']
            } catch (err) {

            }
        }

        await api.resumeJob(job_name, execution_id, {
            type: 'production',
            contract: 'BYOC',
            ...values,
        })
        await initCheckInvocation()
    }

    const initCheckInvocation = async () => {
        setIsLoading(true)
        while (true) {
            const isFinished = await checkInvocationStatus()
            if (isFinished) {
                setIsLoading(false)
                return
            }
        }
    }

    // CHECK JOB STATUS
    const checkInvocationStatus = async () => {
        if (!widgetSettings) {
            return
        }
        const { job_name, execution_id } = widgetSettings
        const {
            status: cStatus,
            response_payload,
            outputs
        } = await api.getJobExecutionDetails(
            job_name,
            execution_id
        )
        setOutputs(outputs)

        switch (cStatus) {
            case 'SUCCEEDED':
                onClose()
                onComplete(response_payload)
                return 'Credentials set successfully!'
            case 'FAILED':
                onError()
                return 'Execution failed'
            case 'RUNNING':
                return
            default:
                return
        }
    }
    // SET JOB REQUEST PAYLOAD
    const setInvocationRequestPayload = async () => {
        if (!widgetSettings) {
            return
        }
        const { job_name, execution_id } = widgetSettings
        const {
            request_payload
        } = await api.getJobExecutionDetails(
            job_name,
            execution_id
        )
        setRequestPayload(request_payload)
    }

    return (
        <ChakraProvider>
            {widgetSettings && product && partner && (
                <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    motionPreset="scale"
                    size={'sm'}
                >
                    <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
                    <ModalContent borderRadius={0}>
                        <ModalHeader>
                            <b
                                style={styles?.title ? styles.title : undefined}
                            >
                                Please enter your credentials
                            </b>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormComponent
                                fields={GET_FORM_FIELDS(product, partner)}
                                onFormComplete={onFormComplete}
                                isLoading={isLoading}
                                styles={styles}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </ChakraProvider>
    )
}
