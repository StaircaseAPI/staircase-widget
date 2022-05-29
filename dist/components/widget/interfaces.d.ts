import { SystemStyleObject } from "@chakra-ui/styled-system";
export interface TokenData {
    origin: string;
    api_key: string;
    job_name: string;
    execution_id: string;
}
export interface Styles {
    'submitButton'?: SystemStyleObject;
    'submitButton:hover'?: SystemStyleObject;
    inputLabel?: SystemStyleObject;
    title?: SystemStyleObject;
    root?: SystemStyleObject;
    input?: SystemStyleObject;
    'input:active'?: SystemStyleObject;
    'input:focus'?: SystemStyleObject;
    'input:focusWithin'?: SystemStyleObject;
    'input:hover'?: SystemStyleObject;
    'input:visited'?: SystemStyleObject;
}
export interface RequestPayload {
    styles: Styles;
    product: string;
    partner: string;
}
export interface Props {
    token: string;
    onComplete: (result: any) => any;
    onError: (error: any) => any;
}
export interface Outputs {
    CreateBlob?: {
        response_payload: any;
    };
}
