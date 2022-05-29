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
import { Popover, PopoverTrigger, Button, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Center, SimpleGrid, } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
export var ColorPicker = function (_a) {
    var onColorPick = _a.onColorPick;
    var _b = useState('gray.200'), color = _b[0], setColor = _b[1];
    var colors = [
        'gray.200',
        'gray.300',
        'gray.400',
        'gray.500',
        'gray.600',
        'orange.200',
        'orange.300',
        'orange.400',
        'orange.500',
        'orange.600',
        'yellow.200',
        'yellow.300',
        'yellow.400',
        'yellow.500',
        'yellow.600',
        'green.200',
        'green.300',
        'green.400',
        'green.500',
        'green.600',
        'cyan.200',
        'cyan.300',
        'cyan.400',
        'cyan.500',
        'cyan.600',
        'blue.200',
        'blue.300',
        'blue.400',
        'blue.500',
        'blue.600',
        'purple.200',
        'purple.300',
        'purple.400',
        'purple.500',
        'purple.600',
    ];
    useEffect(function () {
        onColorPick(color);
    }, [color]);
    return (_jsx(Center, __assign({ marginTop: 5 }, { children: _jsxs(Popover, __assign({ variant: "picker" }, { children: [_jsx(PopoverTrigger, { children: _jsx(Button, { "aria-label": color, background: color, height: "22px", width: "22px", padding: 0, minWidth: "unset", borderRadius: 3 }, void 0) }, void 0), _jsxs(PopoverContent, __assign({ width: "170px" }, { children: [_jsx(PopoverArrow, { bg: color }, void 0), _jsx(PopoverCloseButton, { color: "white" }, void 0), _jsx(PopoverHeader, __assign({ height: "100px", backgroundColor: color, borderTopLeftRadius: 5, borderTopRightRadius: 5, color: "white" }, { children: _jsx(Center, __assign({ height: "100%" }, { children: color }), void 0) }), void 0), _jsx(PopoverBody, __assign({ height: "240px" }, { children: _jsx(SimpleGrid, __assign({ columns: 5, spacing: 2 }, { children: colors.map(function (c) { return (_jsx(Button, { "aria-label": c, background: c, height: "22px", width: "22px", padding: 0, minWidth: "unset", borderRadius: 3, _hover: { background: c }, onClick: function () {
                                        setColor(c);
                                    } }, c)); }) }), void 0) }), void 0)] }), void 0)] }), void 0) }), void 0));
};
