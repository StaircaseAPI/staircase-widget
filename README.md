# Staircase Widget app
Provides React components to use.  
v^2.0.0 supports React 18  
v^1.0.0 supports React 16  

## Install

### npm 

```npm install @staircase/partner-credentials-widget```

### yarn 

```yarn add @staircase/partner-credentials-widget```

### React 16 and yarn

```yarn add @staircase/partner-credentials-widget@^1.0.0```



## Examples of usage

Note, to get `token` use  [Staircase endpoint](https://api.staircase.co/docs/Mortgage%20Products/Borrower/Employment/partnerWidgetToken#root)

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
