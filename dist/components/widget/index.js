var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
export var WidgetComponent = function (_a) {
    var title = _a.title, bodyText = _a.bodyText, buttonText = _a.buttonText, buttonColorSchema = _a.buttonColorSchema;
    var _b = useDisclosure(), isOpen = _b.isOpen, onOpen = _b.onOpen, onClose = _b.onClose;
    useEffect(function () {
        onOpen();
    }, []);
    return (_jsxs(Modal, __assign({ closeOnOverlayClick: false, isOpen: isOpen, onClose: onClose, isCentered: true, motionPreset: 'scale', size: 'xl' }, { children: [_jsx(ModalOverlay, {}, void 0), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: title }, void 0), _jsx(ModalBody, { children: bodyText }, void 0), _jsx(ModalFooter, { children: _jsx(Button, __assign({ colorScheme: buttonColorSchema, mr: 3, onClick: onClose }, { children: buttonText }), void 0) }, void 0)] }, void 0)] }), void 0));
};
