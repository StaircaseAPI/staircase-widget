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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormLabel, FormControl, Input, Button, Select, Text, } from '@chakra-ui/react';
import { ColorPicker } from './form_controls/color';
export var FormComponent = function (_a) {
    var fields = _a.fields, onFormComplete = _a.onFormComplete, isLoading = _a.isLoading, styles = _a.styles;
    var _b = useForm(), handleSubmit = _b.handleSubmit, register = _b.register, setValue = _b.setValue, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    return (_jsxs("form", __assign({ onSubmit: handleSubmit(onFormComplete) }, { children: [fields.map(function (_a, index) {
                var name = _a.name, placeholder = _a.placeholder, type = _a.type, validation = _a.validation, label = _a.label, options = _a.options;
                {
                    switch (type) {
                        case 'file':
                            return (_jsxs(FormControl, __assign({ pt: "15px", isInvalid: errors[name] }, { children: [_jsx(Text, __assign({ color: '#000000', fontSize: '16px' }, { children: label }), void 0), _jsx(Input, __assign({ id: name, placeholder: placeholder }, register(name, validation)), void 0), _jsx(FormErrorMessage, { children: errors.name && errors.name.message }, void 0)] }), index));
                        case 'string':
                            return (_jsxs(FormControl, __assign({ pt: "15px", isInvalid: errors[name] }, { children: [_jsx(FormLabel, __assign({ htmlFor: name }, { children: label }), void 0), _jsx(Input, __assign({ id: name, placeholder: placeholder, borderRadius: 0, padding: '12px 20px', fontSize: '12px' }, register(name, validation)), void 0), _jsx(FormErrorMessage, { children: errors.name && errors.name.message }, void 0)] }), index));
                        case 'select':
                            return (_jsxs(FormControl, __assign({ pt: "15px", isInvalid: errors[name] }, { children: [_jsx(FormLabel, __assign({ htmlFor: name }, { children: label }), void 0), _jsx(Select, __assign({ id: name, variant: "filled", placeholder: placeholder }, register(name, validation), { children: _jsx(_Fragment, { children: options === null || options === void 0 ? void 0 : options.map(function (option, key) {
                                                return (_jsx("option", __assign({ value: option }, { children: option }), key));
                                            }) }, void 0) }), void 0), _jsx(FormErrorMessage, { children: errors.name && errors.name.message }, void 0)] }), index));
                        case 'color':
                            return (_jsxs(FormControl, __assign({ pt: "15px", isInvalid: errors[name] }, { children: [_jsx(FormLabel, __assign({ htmlFor: name }, { children: label }), void 0), _jsx(ColorPicker, { onColorPick: function (color) {
                                            setValue(name, color);
                                        } }, void 0), _jsx(FormErrorMessage, { children: errors.name && errors.name.message }, void 0)] }), index));
                        default:
                            break;
                    }
                }
            }), _jsx(Button, __assign({ w: "100%", my: "15px", bg: !styles.submitButton ? '#04aa6d' : undefined, borderRadius: 0, variant: "solid", type: "submit", style: styles.submitButton ? styles.submitButton : undefined, _hover: styles['submitButton:hover'] ? styles.submitButton['submitButton:hover'] : {
                    bg: '#04aa6dc7',
                }, isLoading: isSubmitting || isLoading }, { children: "Save" }), void 0)] }), void 0));
};
