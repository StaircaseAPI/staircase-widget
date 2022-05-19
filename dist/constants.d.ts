export interface Field {
    name: string;
    label: string;
    placeholder: string;
    type: 'string' | 'file' | 'select' | 'color';
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
export declare const WIDGET_FORM_FIELDS: Field[];
