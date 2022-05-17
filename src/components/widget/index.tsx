import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";
import { useEffect } from "react";

interface Props {
    title: string,
    bodyText: string,
    buttonText: string,
    buttonColorSchema: ThemeTypings["colorSchemes"]
}

export const WidgetComponent = (
    {
        title,
        bodyText,
        buttonText,
        buttonColorSchema
    }: Props
) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    useEffect(() => {
        onOpen()
    }, [])
    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            motionPreset='scale'
            size={'xl'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalBody>
                    {bodyText}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={ buttonColorSchema} mr={3} onClick={onClose}>
                        {buttonText}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}