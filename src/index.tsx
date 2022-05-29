import { WidgetComponent } from './components'
import { render } from 'react-dom'

export const renderWidget = (
    element: HTMLElement,
    token: string,
    onComplete: () => any,
    onError: () => any
) => {
    render(
        <WidgetComponent
            token={token}
            onComplete={onComplete}
            onError={onError}
        />,
        element
    )
}

export { WidgetComponent as Widget } from './components'

