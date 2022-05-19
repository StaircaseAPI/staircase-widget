import CryptoJS from 'crypto-js'
import jwt_decode from 'jwt-decode'

export const toBase64Url = (data: any) => {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(data)
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '')
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-')
    encodedSource = encodedSource.replace(/\//g, '_')
    return encodedSource
}

export const generateJWTToken = (data: any) => {
    const header = {
        alg: 'HS256',
        typ: 'JWT',
    }
    const encodedHeader = toBase64Url(
        CryptoJS.enc.Utf8.parse(JSON.stringify(header))
    )
    const encodedData = toBase64Url(
        CryptoJS.enc.Utf8.parse(JSON.stringify(data))
    )

    const unsignedToken = encodedHeader + '.' + encodedData
    console.log({ unsignedToken })
    const signedToken = signJWTToken(unsignedToken)
    console.log({ signedToken })
    return signedToken
}

export const signJWTToken = (token: string) => {
    const secret = 'staircase'

    let signature = toBase64Url(CryptoJS.HmacSHA256(token, secret))

    return token + '.' + signature
}

export const decodeJWTToken = (token: string) => {
    return jwt_decode(token)
}
