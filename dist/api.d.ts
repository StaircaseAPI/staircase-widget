import { AxiosInstance } from 'axios';
export declare class Api {
    axios: AxiosInstance;
    domain: string;
    apiKey: string;
    constructor();
    private request;
    invokeJob: (baseURL: string, apiKey: string, job_name: string, request_payload: any, callback_url?: string | undefined) => Promise<any>;
    getJobExecutionDetails: (baseURL: string, apiKey: string, job_name: string, execution_id: string) => Promise<any>;
    resumeJob: (baseURL: string, apiKey: string, job_name: string, execution_id: string, body: any) => Promise<any>;
}
