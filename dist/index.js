import { jsx as _jsx } from "react/jsx-runtime";
import { WidgetComponent } from './components';
import ReactDOM from 'react-dom/client';
export var renderWidget = function (element, token, onComplete, onError) {
    var root = ReactDOM.createRoot(element);
    root.render(_jsx(WidgetComponent, { token: token, onComplete: onComplete, onError: onError }, void 0));
};
//render_widget(
//document.getElementById('root') as HTMLElement,
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmlnaW4iOiJib3Jyb3dlci5zdGFpcmNhc2VhcGkuY29tIiwiYXBpX2tleSI6IjIzM2VhZDk0LTA5MGItNGVjMS04OTc3LTBmMzhjOGE0ODYwMiIsImpvYl9uYW1lIjoiRW1wbG95bWVudEVxdWlmYXhTZXR1cCIsImV4ZWN1dGlvbl9pZCI6IjAxRzNFNFNaSEVFRUc1VzE0RFZaWkpRQVpLIiwicHJvZHVjdCI6IkVtcGxveW1lbnQiLCJwYXJ0bmVyIjoiRXF1aWZheCIsImNhbGxiYWNrX3VybCI6Imh0dHBzOi8vd2ViaG9vay5zaXRlLzcyM2RhYjVjLTc4MmYtNDg2MS05N2JkLTQ4MjRjYzA3NjZiNSJ9.Y3Ykw-wedoDrNECeHXbhf4_jhyQhdpk-JkJMckm0iic'
//)
export { WidgetComponent as Widget } from './components';
