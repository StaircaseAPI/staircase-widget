import { useEffect, useState, useCallback } from 'react'

import {
    ChakraProvider,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spinner,
    useDisclosure,
    Text,
} from '@chakra-ui/react'

import { FormComponent } from '../form'
import { GET_FORM_FIELDS } from './form_fields'
import { decodeJWTToken, sleep } from '../helpers'
import { Api } from '../../api'

import { TokenData, Styles, RequestPayload, Props, Outputs } from './interfaces'

export const WidgetComponent = (props: Props) => {
    const { token, onComplete, onError, onClose: onCloseWidget } = props
    const { isOpen, onOpen, onClose: onCloseModal } = useDisclosure()

    const onClose = useCallback(() => {
        onCloseWidget()
        onCloseModal()
    }, [onCloseWidget, onCloseModal])

    const [tokenData, setTokenData] = useState<TokenData>()
    const [styles, setStyles] = useState<Styles>()
    const [requestPayload, setRequestPayload] = useState<RequestPayload>()
    const [outputs, setOutputs] = useState<Outputs>()

    const [product, setProduct] = useState<string>()
    const [partner, setPartner] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const decodedTokenData: any = decodeJWTToken(token)
        try {
            const {
                origin: decoded_origin,
                api_key: decoded_api_key,
                job_name: decoded_job_name,
                execution_id: decoded_execution_id,
            } = decodedTokenData
            setTokenData({
                origin: decoded_origin,
                api_key: decoded_api_key,
                job_name: decoded_job_name,
                execution_id: decoded_execution_id,
            })
        } catch (err) {
            console.log(err)
            onClose()
            onError(err)
        }
    }, [])

    useEffect(() => {
        if (tokenData) {
            if (!requestPayload) {
                setIsLoading(true)
                setInvocationRequestPayload().then(() => setIsLoading(false))
            }
        }
    }, [tokenData])

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
        try {
            if (!tokenData) {
                return
            }
            const { origin, api_key, job_name, execution_id } = tokenData
            const api = new Api(origin, api_key)
            if ('pfx_certificate' in values) {
                try {
                    const { url } =
                        outputs?.CreateBlob?.response_payload.presigned_urls
                            .upload
                    await api.uploadFile(url, values['pfx_certificate'])
                    delete values['pfx_certificate']
                } catch (err) {
                    // TODO: should we close widget here?
                    console.log(err)
                    onError('Api error')
                }
            }

            await api.resumeJob(job_name, execution_id, {
                type: 'production',
                contract: 'BYOC',
                ...values,
            })
            await initCheckInvocation()
        } catch (e) {
            console.log('Error inside widget', e)
            onError('Unhandled error inside widget.')
        }
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
        if (!tokenData) {
            return
        }
        const { job_name, execution_id, origin, api_key } = tokenData
        const api = new Api(origin, api_key)
        const {
            status: cStatus,
            response_payload,
            outputs,
        } = await api.getJobExecutionDetails(job_name, execution_id)
        setOutputs(outputs)

        switch (cStatus) {
            case 'SUCCEEDED':
                onClose()
                onComplete(response_payload)
                return 'Credentials set successfully!'
            case 'FAILED':
                onError('Execution failed')
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
        if (!tokenData) {
            return
        }
        const { job_name, execution_id, origin, api_key } = tokenData
        const api = new Api(origin, api_key)
        const { request_payload } = await api.getJobExecutionDetails(
            job_name,
            execution_id
        )
        setRequestPayload(request_payload)
    }

    return (
        <ChakraProvider>
            {isLoading ? (
                <Spinner
                    thickness="6px"
                    size="xl"
                    style={{
                        position: 'absolute',
                        top: 'calc(50% - 4em)',
                        left: 'calc(50% - 4em)',
                    }}
                />
            ) : (
                tokenData &&
                product &&
                partner &&
                styles && (
                    <Modal
                        closeOnOverlayClick={false}
                        isOpen={isOpen}
                        onClose={onClose}
                        isCentered
                        motionPreset="scale"
                        size={'sm'}
                    >
                        <ModalOverlay backdropFilter="blur(10px) hue-rotate(90deg)" />
                        <ModalContent sx={styles?.root} borderRadius={0}>
                            <ModalHeader>
                                <Text sx={styles?.title} fontWeight={'bold'}>
                                    Please enter your credentials
                                </Text>
                            </ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <FormComponent
                                    fields={GET_FORM_FIELDS(product, partner)}
                                    onFormComplete={onFormComplete}
                                    styles={styles}
                                />
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                )
            )}
        </ChakraProvider>
    )
}
