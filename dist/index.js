import { jsx as _jsx } from "react/jsx-runtime";
import { WidgetComponent } from './components';
import ReactDOM from 'react-dom/client';
export var renderWidget = function (element, token, onComplete, onError) {
    var root = ReactDOM.createRoot(element);
    root.render(_jsx(WidgetComponent, { token: token, onComplete: onComplete, onError: onError }));
};
export { WidgetComponent as Widget } from './components';
