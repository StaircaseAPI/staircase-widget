export interface Field {
    name: string;
    label: string;
    placeholder: string;
    type: 'string' | 'file' | 'select' | 'color' | 'password';
    validation?: {
        required?: string;
        minLength?: {
            value: number;
            message: string;
        };
    };
    options?: string[];
    disabled?: boolean;
    defaultValue?: string;
}
export declare const GET_FORM_FIELDS: (product: string, partner: string) => Field[];
