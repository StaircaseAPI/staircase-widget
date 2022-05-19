import { ThemeTypings } from '@chakra-ui/styled-system'
import { useContext, useEffect, useState } from 'react'

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
import { WIDGET_FORM_FIELDS } from '../../constants'
import { decodeJWTToken } from '../helpers'
import { Context } from '../../context'

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
    onWidgetComplete: (result: any) => any
}

export const WidgetComponent = (props: Props) => {
    const { token, onWidgetComplete } = props

    const { api } = useContext(Context)

    const [widgetSettings, setWidgetSettings] = useState<WidgetSettings>()

    const [styles, setStyles] = useState<any>()
    const [isLoading, setIsLoading] = useState(false)

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        if (token) {
            const decodedToken: any = decodeJWTToken(token)
            setWidgetSettings(decodedToken)
        }
    }, [])

    useEffect(() => {
        if (widgetSettings) {
            initCheckInvocation()
        }
    }, [widgetSettings])

    console.log({ widgetSettings })

    // ONCE FORM COMPLETED
    const onFormComplete = async (values: any) => {
        if (!widgetSettings) {
            return
        }
        const { origin, api_key, job_name, execution_id } = widgetSettings
        await api.resumeJob(origin, api_key, job_name, execution_id, {
            type: 'test',
            ...values,
        })
        await initCheckInvocation()
    }

    const initCheckInvocation = async () => {
        setIsLoading(true)
        while (true) {
            const isFinished = await checkInvocationStatus()
            console.log({ isFinished })
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
        const { origin, api_key, job_name, execution_id } = widgetSettings
        const status = await api.getJobExecutionDetails(
            origin,
            api_key,
            job_name,
            execution_id
        )
        const { status: cStatus, request_payload } = status
        const { styles: rpStyles } = request_payload
        setStyles(rpStyles)
        switch (cStatus) {
            case 'WAIT_FOR_ACTION':
                onOpen()
                return true
            case 'SUCCEEDED':
                onClose()
                return 'Credentials set successfully!'
            case 'FAILED':
                return 'Execution failed'
            case 'RUNNING':
                return
            default:
                return
        }
    }

    return (
        <ChakraProvider>
            {widgetSettings && (
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
                            <b>Please enter your credentials</b>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <FormComponent
                                fields={WIDGET_FORM_FIELDS}
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
