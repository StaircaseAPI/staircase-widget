import { jsx as _jsx } from "react/jsx-runtime";
import { WidgetComponent } from './components';
import ReactDOM from 'react-dom/client';
export var renderWidget = function (element, token, onComplete, onError, onClose) {
    var root = ReactDOM.createRoot(element);
    root.render(_jsx(WidgetComponent, { token: token, onComplete: onComplete, onError: onError, onClose: onClose }, void 0));
};
export { WidgetComponent as Widget } from './components';
