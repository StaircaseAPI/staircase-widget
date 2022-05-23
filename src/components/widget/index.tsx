import { useEffect, useState } from 'react'

import {
    ChakraProvider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Spinner,
    useDisclosure,
} from '@chakra-ui/react'

import { FormComponent } from '../form'
import { GET_FORM_FIELDS } from './form_fields'
import { decodeJWTToken } from '../helpers'
import { Api } from "../../api";

interface WidgetSettings {
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

export const sleep = (ms: any) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const WidgetComponent = (props: Props) => {
    const { token, onComplete, onError } = props

    const [widgetSettings, setWidgetSettings] = useState<WidgetSettings>()
    const [styles, setStyles] = useState<any>()
    const [requestPayload, setRequestPayload] = useState<any>()
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
                setIsLoading(true)
                setInvocationRequestPayload().then(() => setIsLoading(false))
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
        const { origin, api_key, job_name, execution_id } = widgetSettings
        const api = new Api(origin, api_key)
        if ('pfx_certificate' in values) {
            try {
                const {
                    url
                } = outputs.CreateBlob.response_payload.presigned_urls.upload
                await api.uploadFile(url, values['pfx_certificate'])
                delete values['pfx_certificate']
            } catch (err) {
                console.log({err})
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
        while (true) {
            const isFinished = await checkInvocationStatus()
            if (isFinished) {
                return
            }
            await sleep(1500)
        }
    }

    // CHECK JOB STATUS
    const checkInvocationStatus = async () => {
        if (!widgetSettings) {
            return
        }
        const { job_name, execution_id, origin, api_key } = widgetSettings
        const api = new Api(origin, api_key)
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
            case 'WAIT_FOR_ACTION':
                return true
            default:
                return
        }
    }
    // SET JOB REQUEST PAYLOAD
    const setInvocationRequestPayload = async () => {
        if (!widgetSettings) {
            return
        }
        const { job_name, execution_id, origin, api_key } = widgetSettings
        const api = new Api(origin, api_key)
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
            {isLoading ? <Spinner
                thickness="6px"
                size="xl"
                style={{
                    position: 'absolute',
                    top: 'calc(50% - 4em)',
                    left: 'calc(50% - 4em)',
                }}
            /> : widgetSettings && product && partner && styles && (
                <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    motionPreset="scale"
                    size={'sm'}
                >
                    <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
                    <ModalContent
                        style={styles?.root ? styles.root : undefined}
                        borderRadius={0}>
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
