import { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import axios from 'axios'
import axiosRetry from 'axios-retry'

const RETRY_DELAY_LENGTH_MS = 1000
const MAX_REQ_TRIES = 2

export class Api {
    axios: AxiosInstance

    constructor(domain: string, apiKey: string) {
        this.axios = axios.create({
            baseURL: `https://${domain}`,
            headers: { 'x-api-key': apiKey },
        })

        axiosRetry(this.axios, {
            retries: MAX_REQ_TRIES,
            retryCondition: (err: AxiosError) => {
                console.log({ err })
                return true
            },
            retryDelay: (retryCount) => {
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
        job_name: string,
        request_payload: any,
        callback_url?: string
    ) => {
        return await this.request({
            method: 'POST',
            url: `/job/jobs/${job_name}/executions`,
            data: JSON.stringify({
                request_payload,
                callback_url,
            }),
        })
    }

    getJobExecutionDetails = async (
        job_name: string,
        execution_id: string
    ) => {
        return await this.request({
            method: 'GET',
            url: `/job/jobs/${job_name}/executions/${execution_id}`,
        })
    }

    resumeJob = async (
        job_name: string,
        execution_id: string,
        body: any
    ) => {
        return await this.request({
            method: 'POST',
            url: `/job/jobs/${job_name}/executions/${execution_id}/resume`,
            data: JSON.stringify(body),
        })
    }

    uploadFile = async (url: string, file: any) => {
        return await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': file.type },
            body: file,
        })
    }
}
