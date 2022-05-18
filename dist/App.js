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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useMemo } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Context } from './context';
import { Api } from './api';
import { WidgetComponent } from './components';
import { useGlobalContext } from './states';
var colors = {
    brand: {
        black: '#1C1C1E',
        grey: '#B8B8C2',
        inputHoverGrey: '#9C9CAB',
        lowerBlue: '#001CDB',
        lightBlue: '#0064FF',
        green: '#00D200',
        purple: '#6236FF',
        errorRed: '#E80000',
        backgroundColor: '#ECEFFF',
    },
};
function Private(_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var auth = useContext(Context).auth;
    return auth ? children : _jsx(Navigate, { to: "/login" }, void 0);
}
var theme = extendTheme({
    colors: colors,
    components: {
        Button: {
            variants: {
                staircase: {
                    bg: 'brand.lowerBlue',
                    minWidth: '160px',
                    borderRadius: 0,
                    color: 'white',
                    _disabled: {
                        bg: 'brand.lowerBlue',
                    },
                    _hover: {
                        bg: 'white',
                        border: '1px solid #001CDB',
                        color: 'brand.lowerBlue',
                    },
                },
            },
        },
    },
});
function App() {
    var api = useMemo(function () { return new Api(); }, []);
    var globalContext = useGlobalContext();
    return (_jsx(Context.Provider, __assign({ value: __assign({ api: api }, globalContext) }, { children: _jsx(ChakraProvider, __assign({ theme: theme }, { children: _jsx(Router, { children: _jsx(Routes, { children: _jsx(Route, { path: "/", element: _jsx(WidgetComponent, { title: 'title', bodyText: 'bodyText bodyText bodyText bodyText bodyText bodyText bodyText bodyText bodyText', buttonColorSchema: 'blue', buttonText: 'I am Button' }, void 0) }, void 0) }, void 0) }, void 0) }), void 0) }), void 0));
}
export default App;
