import jwt_decode from 'jwt-decode'

export const decodeJWTToken = (token: string) => {
    return jwt_decode(token)
}

export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}