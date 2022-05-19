# Staircase Widget app
Provides React components to use.

## Install

### npm 

```npm install @staircase/partner-credentials-widget```

### yarn 

```yarn add @staircase/partner-credentials-widget```


## Examples of usage

```js
import { Widget } from '@staircase/partner-credentials-widget'

const token = "YOUR_TOKEN"

const App = () => {
    return <Widget token={token} onWidgetComplete={() => {console.log("Widget worked")}}/>
}
```
