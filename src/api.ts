import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'
import axiosRetry from 'axios-retry'

const RETRY_DELAY_LENGTH_MS = 2000
const MAX_REQ_TRIES = 5

export class Api {
    axios: AxiosInstance

    domain = window.location.host.includes('localhost')
        ? 'dev-lower.staircaseapi.com'
        : window.location.host

    constructor() {
        this.axios = axios.create({
            baseURL: `https://${this.domain}`,
        })

        axiosRetry(this.axios, {
            retries: MAX_REQ_TRIES,
            retryCondition: (err: AxiosError) => {
                console.log({ err })
                return true
            },
            retryDelay: (retryCount) => {
                console.log(retryCount)
                return RETRY_DELAY_LENGTH_MS
            },
        })
    }
    private request = async (config: AxiosRequestConfig) => {
        return await this.axios
            .request(config)
            .then((response) => response.data)
    }

    getSettings = async (id: string) => {
        return await this.request({
            method: 'POST',
            url: '/preapproval/get-settings',
            data: JSON.stringify({ id }),
        })
    }


}
