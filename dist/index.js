import { jsx as _jsx } from "react/jsx-runtime";
import { WidgetComponent } from './components';
import { render } from 'react-dom';
export var renderWidget = function (element, token, onComplete, onError) {
    render(_jsx(WidgetComponent, { token: token, onComplete: onComplete, onError: onError }, void 0), element);
};
export { WidgetComponent as Widget } from './components';
