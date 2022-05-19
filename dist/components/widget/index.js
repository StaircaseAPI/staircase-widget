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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useEffect, useState } from 'react';
import { ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, } from '@chakra-ui/react';
import { FormComponent } from '../form';
import { WIDGET_FORM_FIELDS } from '../../constants';
import { decodeJWTToken } from '../helpers';
import { Context } from '../../context';
export var WidgetComponent = function (props) {
    var token = props.token, onWidgetComplete = props.onWidgetComplete;
    var api = useContext(Context).api;
    var _a = useState(), widgetSettings = _a[0], setWidgetSettings = _a[1];
    var _b = useState(), styles = _b[0], setStyles = _b[1];
    var _c = useState(false), isLoading = _c[0], setIsLoading = _c[1];
    var _d = useDisclosure(), isOpen = _d.isOpen, onOpen = _d.onOpen, onClose = _d.onClose;
    useEffect(function () {
        if (token) {
            var decodedToken = decodeJWTToken(token);
            setWidgetSettings(decodedToken);
        }
    }, []);
    useEffect(function () {
        if (widgetSettings) {
            initCheckInvocation();
        }
    }, [widgetSettings]);
    console.log({ widgetSettings: widgetSettings });
    // ONCE FORM COMPLETED
    var onFormComplete = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var origin, api_key, job_name, execution_id;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!widgetSettings) {
                        return [2 /*return*/];
                    }
                    origin = widgetSettings.origin, api_key = widgetSettings.api_key, job_name = widgetSettings.job_name, execution_id = widgetSettings.execution_id;
                    return [4 /*yield*/, api.resumeJob(origin, api_key, job_name, execution_id, __assign({ type: 'test' }, values))];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, initCheckInvocation()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var initCheckInvocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isFinished;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, checkInvocationStatus()];
                case 2:
                    isFinished = _a.sent();
                    console.log({ isFinished: isFinished });
                    if (isFinished) {
                        setIsLoading(false);
                        return [2 /*return*/];
                    }
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // CHECK JOB STATUS
    var checkInvocationStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var origin, api_key, job_name, execution_id, status, cStatus, request_payload, rpStyles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!widgetSettings) {
                        return [2 /*return*/];
                    }
                    origin = widgetSettings.origin, api_key = widgetSettings.api_key, job_name = widgetSettings.job_name, execution_id = widgetSettings.execution_id;
                    return [4 /*yield*/, api.getJobExecutionDetails(origin, api_key, job_name, execution_id)];
                case 1:
                    status = _a.sent();
                    cStatus = status.status, request_payload = status.request_payload;
                    rpStyles = request_payload.styles;
                    setStyles(rpStyles);
                    switch (cStatus) {
                        case 'WAIT_FOR_ACTION':
                            onOpen();
                            return [2 /*return*/, true];
                        case 'SUCCEEDED':
                            onClose();
                            return [2 /*return*/, 'Credentials set successfully!'];
                        case 'FAILED':
                            return [2 /*return*/, 'Execution failed'];
                        case 'RUNNING':
                            return [2 /*return*/];
                        default:
                            return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ChakraProvider, { children: widgetSettings && (_jsxs(Modal, __assign({ closeOnOverlayClick: false, isOpen: isOpen, onClose: onClose, isCentered: true, motionPreset: "scale", size: 'sm' }, { children: [_jsx(ModalOverlay, { backdropFilter: "blur(10px) hue-rotate(90deg)" }, void 0), _jsxs(ModalContent, __assign({ borderRadius: 0 }, { children: [_jsx(ModalHeader, { children: _jsx("b", { children: "Please enter your credentials" }, void 0) }, void 0), _jsx(ModalCloseButton, {}, void 0), _jsx(ModalBody, { children: _jsx(FormComponent, { fields: WIDGET_FORM_FIELDS, onFormComplete: onFormComplete, isLoading: isLoading, styles: styles }, void 0) }, void 0)] }), void 0)] }), void 0)) }, void 0));
};
