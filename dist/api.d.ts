import { AxiosInstance } from 'axios';
export declare class Api {
    axios: AxiosInstance;
    constructor(domain: string, apiKey: string);
    private request;
    invokeJob: (job_name: string, request_payload: any, callback_url?: string | undefined) => Promise<any>;
    getJobExecutionDetails: (job_name: string, execution_id: string) => Promise<any>;
    resumeJob: (job_name: string, execution_id: string, body: any) => Promise<any>;
    uploadFile: (url: string, file: any) => Promise<Response>;
}
