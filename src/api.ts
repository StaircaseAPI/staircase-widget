import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'
import axiosRetry from 'axios-retry'

const RETRY_DELAY_LENGTH_MS = 2000
const MAX_REQ_TRIES = 5

export class Api {
    axios: AxiosInstance

    domain = window.location.host.includes('localhost')
        ? 'borrower.staircaseapi.com'
        : // ? 'console-dev.staircaseapi.com'
          window.location.host

    apiKey = '2564a812-dcc8-4923-a1d3-838c8d67fb6b'
    // apiKey = 'f7ba8e2e-0d82-43ac-bd20-9789a4f50473'

    constructor() {
        this.axios = axios.create({
            baseURL: `https://${this.domain}`,
            headers: { 'x-api-key': this.apiKey },
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

    invokeJob = async (
        baseURL: string,
        apiKey: string,
        job_name: string,
        request_payload: any,
        callback_url?: string
    ) => {
        return await this.request({
            method: 'POST',
            baseURL,
            headers: { 'x-api-key': apiKey },
            url: `/jobs/${job_name}/executions`,
            data: JSON.stringify({
                request_payload,
                callback_url,
            }),
        })
    }

    getJobExecutionDetails = async (
        baseURL: string,
        apiKey: string,
        job_name: string,
        execution_id: string
    ) => {
        return await this.request({
            method: 'GET',
            baseURL,
            headers: { 'x-api-key': apiKey },
            url: `/jobs/${job_name}/executions/${execution_id}`,
        })
    }

    resumeJob = async (
        baseURL: string,
        apiKey: string,
        job_name: string,
        execution_id: string,
        body: any
    ) => {
        return await this.request({
            method: 'POST',
            baseURL,
            headers: { 'x-api-key': apiKey },
            url: `/jobs/${job_name}/executions/${execution_id}/resume`,
            data: JSON.stringify(body),
        })
    }
}
