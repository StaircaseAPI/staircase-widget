import { AxiosInstance } from 'axios';
export declare class Api {
    axios: AxiosInstance;
    domain: string;
    constructor();
    private request;
    getSettings: (id: string) => Promise<any>;
}
