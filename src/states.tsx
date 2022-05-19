import { useState } from 'react'

export const useGlobalContext = () => {
    const [errorMsg, setErrorMsg] = useState(
        "Something went wrong! We'll contact you"
    )
    return {
        errorMsg,
        setErrorMsg,
    }
}
