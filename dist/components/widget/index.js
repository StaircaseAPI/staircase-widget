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
import { useEffect, useState, useCallback } from 'react';
import { ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, useDisclosure, Text, } from '@chakra-ui/react';
import { FormComponent } from '../form';
import { GET_FORM_FIELDS } from './form_fields';
import { decodeJWTToken, sleep } from '../helpers';
import { Api } from '../../api';
export var WidgetComponent = function (props) {
    var token = props.token, onComplete = props.onComplete, onError = props.onError, onCloseWidget = props.onClose;
    var _a = useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onCloseModal = _a.onClose;
    var onClose = useCallback(function () {
        onCloseWidget();
        onCloseModal();
    }, [onCloseWidget, onCloseModal]);
    var _b = useState(), tokenData = _b[0], setTokenData = _b[1];
    var _c = useState(), styles = _c[0], setStyles = _c[1];
    var _d = useState(), requestPayload = _d[0], setRequestPayload = _d[1];
    var _e = useState(), outputs = _e[0], setOutputs = _e[1];
    var _f = useState(), product = _f[0], setProduct = _f[1];
    var _g = useState(), partner = _g[0], setPartner = _g[1];
    var _h = useState(false), isLoading = _h[0], setIsLoading = _h[1];
    useEffect(function () {
        var decodedTokenData = decodeJWTToken(token);
        try {
            var decoded_origin = decodedTokenData.origin, decoded_api_key = decodedTokenData.api_key, decoded_job_name = decodedTokenData.job_name, decoded_execution_id = decodedTokenData.execution_id;
            setTokenData({
                origin: decoded_origin,
                api_key: decoded_api_key,
                job_name: decoded_job_name,
                execution_id: decoded_execution_id,
            });
        }
        catch (err) {
            console.log(err);
            onClose();
            onError(err);
        }
    }, []);
    useEffect(function () {
        if (tokenData) {
            if (!requestPayload) {
                setIsLoading(true);
                setInvocationRequestPayload().then(function () { return setIsLoading(false); });
            }
        }
    }, [tokenData]);
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
        var origin, api_key, job_name, execution_id, api, url, err_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!tokenData) {
                        return [2 /*return*/];
                    }
                    origin = tokenData.origin, api_key = tokenData.api_key, job_name = tokenData.job_name, execution_id = tokenData.execution_id;
                    api = new Api(origin, api_key);
                    if (!('pfx_certificate' in values)) return [3 /*break*/, 4];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    url = ((_a = outputs === null || outputs === void 0 ? void 0 : outputs.CreateBlob) === null || _a === void 0 ? void 0 : _a.response_payload.presigned_urls.upload).url;
                    return [4 /*yield*/, api.uploadFile(url, values['pfx_certificate'])];
                case 2:
                    _b.sent();
                    delete values['pfx_certificate'];
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    // TODO: should we close widget here?
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4: return [4 /*yield*/, api.resumeJob(job_name, execution_id, __assign({ type: 'production', contract: 'BYOC' }, values))];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, initCheckInvocation()];
                case 6:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var initCheckInvocation = function () { return __awaiter(void 0, void 0, void 0, function () {
        var isFinished;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, checkInvocationStatus()];
                case 1:
                    isFinished = _a.sent();
                    if (isFinished) {
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, sleep(1500)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    // CHECK JOB STATUS
    var checkInvocationStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
        var job_name, execution_id, origin, api_key, api, _a, cStatus, response_payload, outputs;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!tokenData) {
                        return [2 /*return*/];
                    }
                    job_name = tokenData.job_name, execution_id = tokenData.execution_id, origin = tokenData.origin, api_key = tokenData.api_key;
                    api = new Api(origin, api_key);
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
                            onError('Execution failed');
                            return [2 /*return*/, 'Execution failed'];
                        case 'RUNNING':
                            return [2 /*return*/];
                        case 'WAIT_FOR_ACTION':
                            return [2 /*return*/, true];
                        default:
                            return [2 /*return*/];
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    // SET JOB REQUEST PAYLOAD
    var setInvocationRequestPayload = function () { return __awaiter(void 0, void 0, void 0, function () {
        var job_name, execution_id, origin, api_key, api, request_payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!tokenData) {
                        return [2 /*return*/];
                    }
                    job_name = tokenData.job_name, execution_id = tokenData.execution_id, origin = tokenData.origin, api_key = tokenData.api_key;
                    api = new Api(origin, api_key);
                    return [4 /*yield*/, api.getJobExecutionDetails(job_name, execution_id)];
                case 1:
                    request_payload = (_a.sent()).request_payload;
                    setRequestPayload(request_payload);
                    return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ChakraProvider, { children: isLoading ? (_jsx(Spinner, { thickness: "6px", size: "xl", style: {
                position: 'absolute',
                top: 'calc(50% - 4em)',
                left: 'calc(50% - 4em)',
            } }, void 0)) : (tokenData &&
            product &&
            partner &&
            styles && (_jsxs(Modal, __assign({ closeOnOverlayClick: false, isOpen: isOpen, onClose: onClose, isCentered: true, motionPreset: "scale", size: 'sm' }, { children: [_jsx(ModalOverlay, { backdropFilter: "blur(10px) hue-rotate(90deg)" }, void 0), _jsxs(ModalContent, __assign({ sx: styles === null || styles === void 0 ? void 0 : styles.root, borderRadius: 0 }, { children: [_jsx(ModalHeader, { children: _jsx(Text, __assign({ sx: styles === null || styles === void 0 ? void 0 : styles.title, fontWeight: 'bold' }, { children: "Please enter your credentials" }), void 0) }, void 0), _jsx(ModalCloseButton, {}, void 0), _jsx(ModalBody, { children: _jsx(FormComponent, { fields: GET_FORM_FIELDS(product, partner), onFormComplete: onFormComplete, styles: styles }, void 0) }, void 0)] }), void 0)] }), void 0))) }, void 0));
};
