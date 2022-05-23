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
import { useEffect, useState } from 'react';
import { ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure, } from '@chakra-ui/react';
import { FormComponent } from '../form';
import { GET_FORM_FIELDS } from './form_fields';
import { decodeJWTToken } from '../helpers';
import { Api } from "../../api";
export var WidgetComponent = function (props) {
    var token = props.token, onComplete = props.onComplete, onError = props.onError;
    var _a = useState(), widgetSettings = _a[0], setWidgetSettings = _a[1];
    var _b = useState(), styles = _b[0], setStyles = _b[1];
    var _c = useState(), requestPayload = _c[0], setRequestPayload = _c[1];
    var _d = useState(), api = _d[0], setApi = _d[1];
    var _e = useState(), outputs = _e[0], setOutputs = _e[1];
    var _f = useState(), product = _f[0], setProduct = _f[1];
    var _g = useState(), partner = _g[0], setPartner = _g[1];
    var _h = useState(false), isLoading = _h[0], setIsLoading = _h[1];
    var _j = useDisclosure(), isOpen = _j.isOpen, onOpen = _j.onOpen, onClose = _j.onClose;
    useEffect(function () {
        var decodedToken = decodeJWTToken(token);
        setWidgetSettings(decodedToken);
    }, []);
    useEffect(function () {
        if (widgetSettings) {
            if (!requestPayload) {
                setInvocationRequestPayload();
            }
            if (!api) {
                var origin_1 = widgetSettings.origin, api_key = widgetSettings.api_key;
                setApi(new Api(origin_1, api_key));
            }
        }
    }, [widgetSettings]);
    useEffect(function () {
        if (requestPayload) {
            var rpStyles = requestPayload.styles, product_1 = requestPayload.product, partner_1 = requestPayload.partner;
            setStyles(rpStyles);
            setProduct(product_1);
            setPartner(partner_1);
        }
    }, [requestPayload]);
    useEffect(function () {
        if (product && partner) {
            onOpen();
            initCheckInvocation();
        }
    }, [product, partner]);
    // ONCE FORM COMPLETED
    var onFormComplete = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var job_name, execution_id, url, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!widgetSettings) {
                        return [2 /*return*/];
                    }
                    job_name = widgetSettings.job_name, execution_id = widgetSettings.execution_id;
                    if (!values.includes('pfx_certificate')) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    url = outputs.CreateBlob.response_payloadpresigned_urls.upload.url;
                    return [4 /*yield*/, api.uploadFile(url, values['pfx_certificate'])];
                case 2:
                    _a.sent();
                    delete values['pfx_certificate'];
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, api.resumeJob(job_name, execution_id, __assign({ type: 'production', contract: 'BYOC' }, values))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, initCheckInvocation()];
                case 6:
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
        var job_name, execution_id, _a, cStatus, response_payload, outputs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!widgetSettings) {
                        return [2 /*return*/];
                    }
                    job_name = widgetSettings.job_name, execution_id = widgetSettings.execution_id;
                    return [4 /*yield*/, api.getJobExecutionDetails(job_name, execution_id)];
                case 1:
                    _a = _b.sent(), cStatus = _a.status, response_payload = _a.response_payload, outputs = _a.outputs;
                    setOutputs(outputs);
                    switch (cStatus) {
                        case 'SUCCEEDED':
                            onClose();
                            onComplete(response_payload);
                            return [2 /*return*/, 'Credentials set successfully!'];
                        case 'FAILED':
                            onError();
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
    // SET JOB REQUEST PAYLOAD
    var setInvocationRequestPayload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var job_name, execution_id, request_payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!widgetSettings) {
                        return [2 /*return*/];
                    }
                    job_name = widgetSettings.job_name, execution_id = widgetSettings.execution_id;
                    return [4 /*yield*/, api.getJobExecutionDetails(job_name, execution_id)];
                case 1:
                    request_payload = (_a.sent()).request_payload;
                    setRequestPayload(request_payload);
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ChakraProvider, { children: widgetSettings && product && partner && (_jsxs(Modal, __assign({ closeOnOverlayClick: false, isOpen: isOpen, onClose: onClose, isCentered: true, motionPreset: "scale", size: 'sm' }, { children: [_jsx(ModalOverlay, { backdropFilter: "blur(10px) hue-rotate(90deg)" }), _jsxs(ModalContent, __assign({ borderRadius: 0 }, { children: [_jsx(ModalHeader, { children: _jsx("b", __assign({ style: (styles === null || styles === void 0 ? void 0 : styles.title) ? styles.title : undefined }, { children: "Please enter your credentials" })) }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: _jsx(FormComponent, { fields: GET_FORM_FIELDS(product, partner), onFormComplete: onFormComplete, isLoading: isLoading, styles: styles }) })] }))] }))) }));
};
