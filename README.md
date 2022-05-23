# Staircase Widget app
Provides React components to use.

## Install

### npm 

```npm install @staircase/partner-credentials-widget```

### yarn 

```yarn add @staircase/partner-credentials-widget```


## Examples of usage

Note, to get `token` use  [Staircase api endpoint](https://api.staircase.co/docs/Mortgage%20Products/Borrower/Employment/partnerWidgetToken#root)

### JS
```js
import { renderWidget } from '@staircase/partner-credentials-widget'

const token = "YOUR_TOKEN"
renderWidget(document.getElementById('root'), token, ()=>{console.log("Widget worked"), ()=>{console.log("Widget Error")}})
```

### React
```js
import { Widget } from '@staircase/partner-credentials-widget'

const token = "YOUR_TOKEN"

const App = () => {
    return <Widget token={token} onComplete={() => {console.log("Widget worked")} onError={()=>{}}}/>
}
```
