import { WidgetComponent } from './components'
import ReactDOM from 'react-dom/client'

export const renderWidget = (
    element: HTMLElement,
    token: string,
    onComplete: () => any,
    onError: () => any
) => {
    const root = ReactDOM.createRoot(element)
    root.render(
        <WidgetComponent
            token={token}
            onComplete={onComplete}
            onError={onError}
        />
    )
}

export { WidgetComponent as Widget } from './components'
