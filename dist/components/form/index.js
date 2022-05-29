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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { FileUploader } from "react-drag-drop-files";
import { FormErrorMessage, FormControl, Input, Button, Select, Text, } from '@chakra-ui/react';
import { ColorPicker } from './form_controls/color';
export var FormComponent = function (_a) {
    var fields = _a.fields, onFormComplete = _a.onFormComplete, styles = _a.styles;
    var _b = useForm(), handleSubmit = _b.handleSubmit, register = _b.register, setValue = _b.setValue, _c = _b.formState, errors = _c.errors, isSubmitting = _c.isSubmitting;
    return (_jsxs("form", __assign({ onSubmit: handleSubmit(onFormComplete) }, { children: [fields.map(function (_a, index) {
                var name = _a.name, placeholder = _a.placeholder, type = _a.type, validation = _a.validation, label = _a.label, options = _a.options, types = _a.types;
                {
                    var component = void 0;
                    switch (type) {
                        case 'file':
                            component = (_jsx(FileUploader, { id: "fileUploader", handleChange: function (ev) { return setValue(name, ev); }, name: "file", types: types, label: "Drag or Click here to upload", multiple: false }, void 0));
                            break;
                        case 'string':
                        case 'password':
                            component = (_jsx(Input, __assign({ id: name, placeholder: placeholder, sx: styles === null || styles === void 0 ? void 0 : styles.input, type: type === 'password' ? type : 'text', _hover: styles['input:hover'], _focus: styles['input:focus'], _focusWithin: styles['input:focusWithin'], _active: styles['input:active'], _visited: styles['input:visited'], borderRadius: 0, padding: '12px 20px', fontSize: '12px' }, register(name, validation)), void 0));
                            break;
                        case 'select':
                            component = (_jsx(Select, __assign({ id: name, variant: "filled", placeholder: placeholder }, register(name, validation), { children: _jsx(_Fragment, { children: options === null || options === void 0 ? void 0 : options.map(function (option, key) {
                                        return (_jsx("option", __assign({ value: option }, { children: option }), key));
                                    }) }, void 0) }), void 0));
                            break;
                        case 'color':
                            component = (_jsx(ColorPicker, { onColorPick: function (color) {
                                    setValue(name, color);
                                } }, void 0));
                            break;
                        default:
                            component = (_jsx(Input, __assign({ id: name, placeholder: placeholder, sx: styles === null || styles === void 0 ? void 0 : styles.input, _hover: styles['input:hover'], _focus: styles['input:focus'], _focusWithin: styles['input:focusWithin'], _active: styles['input:active'], _visited: styles['input:visited'], borderRadius: 0, padding: '12px 20px', fontSize: '12px' }, register(name, validation)), void 0));
                            break;
                    }
                    return _jsxs(FormControl, __assign({ pt: "15px", isInvalid: errors[name] }, { children: [_jsx(Text, __assign({ sx: styles === null || styles === void 0 ? void 0 : styles.inputLabel, color: '#000000', fontSize: '16px' }, { children: label }), void 0), component, _jsx(FormErrorMessage, { children: errors.name && errors.name.message }, void 0)] }), index);
                }
            }), _jsx(Button, __assign({ w: "100%", my: "15px", bg: '#04aa6d', borderRadius: 0, variant: "solid", type: "submit", sx: styles === null || styles === void 0 ? void 0 : styles.submitButton, _hover: styles['submitButton:hover'] ? styles['submitButton:hover'] : {
                    bg: '#04aa6dc7',
                }, isLoading: isSubmitting }, { children: "Save" }), void 0)] }), void 0));
};
