import { useState } from 'react';
export var useGlobalContext = function () {
    var _a = useState("Something went wrong! We'll contact you"), errorMsg = _a[0], setErrorMsg = _a[1];
    return {
        errorMsg: errorMsg,
        setErrorMsg: setErrorMsg,
    };
};
