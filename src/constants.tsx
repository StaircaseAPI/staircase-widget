export interface Field {
    name: string
    label: string
    placeholder: string
    type: 'string' | 'file' | 'select' | 'color'
    validation?: {
        required?: string
        minLength?: { value: number; message: string }
    }
    options?: string[]
    disabled?: boolean
    defaultValue?: string
}

export const WIDGET_FORM_FIELDS: Field[] = [
    {
        label: 'TWN Username',
        name: 'twn_username',
        placeholder: 'Enter TWN Username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'TWN Password',
        name: 'twn_password',
        placeholder: 'Enter TWN Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'PFX Certificate Password',
        name: 'pfx_certificate_password',
        placeholder: 'Enter PFX Certificate Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
]

