export interface Field {
    name: string
    label: string
    placeholder: string
    type: 'string' | 'file' | 'select' | 'color' | 'password'
    validation?: {
        required?: string
        minLength?: { value: number; message: string }
    }
    options?: string[]
    disabled?: boolean
    defaultValue?: string
    types?: string[]
}

const EMPLOYMENT_EQUIFAX_FIELDS: Field[] = [
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
        type: 'password',
        validation: {
            required: 'This is required',
        },
    },
    // {
    //     label: 'PFX Certificate',
    //     name: 'pfx_certificate',
    //     placeholder: 'Upload Certificate',
    //     type: 'file',
    //     types: ['pfx'],
    //     validation: {
    //         required: 'This is required',
    //     },
    // },
]
const EMPLOYMENT_ARGYLE_FIELDS: Field[] = [
    {
        label: 'Argyle client ID',
        name: 'client_id',
        placeholder: 'Enter Argyle client ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Argyle client secret',
        name: 'client_secret',
        placeholder: 'Enter Argyle client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Argyle link key',
        name: 'link_key',
        placeholder: 'Enter Argyle link key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const EMPLOYMENT_ATOMIC_FIELDS: Field[] = [
    {
        label: 'Atomic client key',
        name: 'client_key',
        placeholder: 'Enter Atomic client key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic client secret',
        name: 'client_secret',
        placeholder: 'Enter Atomic client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic Username',
        name: 'username',
        placeholder: 'Enter Atomic Username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic Password',
        name: 'password',
        placeholder: 'Enter Atomic Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const EMPLOYMENT_TRUEWORK_FIELDS: Field[] = [
    {
        label: 'Truework token for API',
        name: 'token',
        placeholder: 'Enter token',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework Username',
        name: 'username',
        placeholder: 'Enter username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework Password',
        name: 'password',
        placeholder: 'Enter password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const EMPLOYMENT_TRUEWORK_INSTANT_FIELDS: Field[] = [
    {
        label: 'Truework-Instant token for API',
        name: 'token',
        placeholder: 'Enter token',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework-Instant Username',
        name: 'username',
        placeholder: 'Enter Truework-Instant Username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework-Instant Password',
        name: 'password',
        placeholder: 'Enter Truework-Instant Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const EMPLOYMENT_PINWHEEL_FIELDS: Field[] = [
    {
        label: 'Pinwheel API secret',
        name: 'x_api_secret',
        placeholder: 'Enter Pinwheel API secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const EMPLOYMENT_MERIDIAN_FIELDS: Field[] = [
    {
        label: 'Meridian client ID',
        name: 'client_id',
        placeholder: 'Enter client id',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian client secret',
        name: 'client_secret',
        placeholder: 'Enter client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian domain',
        name: 'domain',
        placeholder: 'Enter Meridian domain',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian MCL schema',
        name: 'mcl',
        placeholder: 'Enter Meridian MCL schema',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
]
const EMPLOYMENT_FINICITY_FIELDS: Field[] = [
    {
        label: 'Finicity partner ID',
        name: 'partnerId',
        placeholder: 'Enter Finicity partner ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Finicity partner secret',
        name: 'partnerId',
        placeholder: 'Enter Finicity partner secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Finicity API key',
        name: 'apiKey',
        placeholder: 'Enter Finicity API key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]

const INCOME_EQUIFAX_FIELDS: Field[] = [
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
        type: 'password',
        validation: {
            required: 'This is required',
        },
    },
    // {
    //     label: 'PFX Certificate',
    //     name: 'pfx_certificate',
    //     placeholder: 'Upload Certificate',
    //     type: 'file',
    //     types: ['pfx'],
    //     validation: {
    //         required: 'This is required',
    //     },
    // },
]
const INCOME_ARGYLE_FIELDS: Field[] = [
    {
        label: 'Argyle client ID',
        name: 'client_id',
        placeholder: 'Enter Argyle client ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Argyle client secret',
        name: 'client_secret',
        placeholder: 'Enter Argyle client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Argyle link key',
        name: 'link_key',
        placeholder: 'Enter Argyle link key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_ATOMIC_FIELDS: Field[] = [
    {
        label: 'Atomic client key',
        name: 'client_key',
        placeholder: 'Enter Atomic client key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic client secret',
        name: 'client_secret',
        placeholder: 'Enter Atomic client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic Username',
        name: 'username',
        placeholder: 'Enter Atomic Username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Atomic Password',
        name: 'password',
        placeholder: 'Enter Atomic Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_TRUEWORK_FIELDS: Field[] = [
    {
        label: 'Truework token for API',
        name: 'token',
        placeholder: 'Enter token',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework Username',
        name: 'username',
        placeholder: 'Enter username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework Password',
        name: 'password',
        placeholder: 'Enter password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_TRUEWORK_INSTANT_FIELDS: Field[] = [
    {
        label: 'Truework-Instant token for API',
        name: 'token',
        placeholder: 'Enter token',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework-Instant Username',
        name: 'username',
        placeholder: 'Enter Truework-Instant Username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Truework-Instant Password',
        name: 'password',
        placeholder: 'Enter Truework-Instant Password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_PINWHEEL_FIELDS: Field[] = [
    {
        label: 'Pinwheel API secret',
        name: 'x_api_secret',
        placeholder: 'Enter Pinwheel API secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_MERIDIAN_FIELDS: Field[] = [
    {
        label: 'Meridian client ID',
        name: 'client_id',
        placeholder: 'Enter client id',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian client secret',
        name: 'client_secret',
        placeholder: 'Enter client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian domain',
        name: 'domain',
        placeholder: 'Enter Meridian domain',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Meridian MCL schema',
        name: 'mcl',
        placeholder: 'Enter Meridian MCL schema',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
]
const INCOME_FINICITY_FIELDS: Field[] = [
    {
        label: 'Finicity partner ID',
        name: 'partnerId',
        placeholder: 'Enter Finicity partner ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Finicity partner secret',
        name: 'partnerId',
        placeholder: 'Enter Finicity partner secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Finicity API key',
        name: 'apiKey',
        placeholder: 'Enter Finicity API key',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
]
const INCOME_EXPERIAN_FIELDS: Field[] = [
    {
        label: 'Experian client ID',
        name: 'client_id',
        placeholder: 'Enter Experian client ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Experian client secret',
        name: 'client_secret',
        placeholder: 'Enter Experian client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Experian username',
        name: 'username',
        placeholder: 'Enter Experian username',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Experian password',
        name: 'password',
        placeholder: 'Enter Experian password',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]
const INCOME_PLAID_FIELDS: Field[] = [
    {
        label: 'Plaid client ID',
        name: 'client_id',
        placeholder: 'Enter Plaid client ID',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    },
    {
        label: 'Plaid client secret',
        name: 'client_secret',
        placeholder: 'Enter Plaid client secret',
        type: 'string',
        validation: {
            required: 'This is required',
        },
    }
]

export const GET_FORM_FIELDS = (
    product: string,
    partner: string
) => {
    switch (product) {
        case 'Employment':
            switch (partner) {
                case 'Equifax':
                    return EMPLOYMENT_EQUIFAX_FIELDS
                case 'Argyle':
                    return EMPLOYMENT_ARGYLE_FIELDS
                case 'Atomic':
                    return EMPLOYMENT_ATOMIC_FIELDS
                case 'Truework':
                    return EMPLOYMENT_TRUEWORK_FIELDS
                case 'Truework-Instant':
                    return EMPLOYMENT_TRUEWORK_INSTANT_FIELDS
                case 'Pinwheel':
                    return EMPLOYMENT_PINWHEEL_FIELDS
                case 'Meridian':
                    return EMPLOYMENT_MERIDIAN_FIELDS
                case 'Finicity':
                    return EMPLOYMENT_FINICITY_FIELDS
                default:
                    return []
            }
        case 'Income':
            switch (partner) {
                case 'Equifax':
                    return INCOME_EQUIFAX_FIELDS
                case 'Argyle':
                    return INCOME_ARGYLE_FIELDS
                case 'Atomic':
                    return INCOME_ATOMIC_FIELDS
                case 'Truework':
                    return INCOME_TRUEWORK_FIELDS
                case 'Truework-Instant':
                    return INCOME_TRUEWORK_INSTANT_FIELDS
                case 'Pinwheel':
                    return INCOME_PINWHEEL_FIELDS
                case 'Meridian':
                    return INCOME_MERIDIAN_FIELDS
                case 'Finicity':
                    return INCOME_FINICITY_FIELDS
                case 'Experian':
                    return INCOME_EXPERIAN_FIELDS
                case 'Plaid':
                    return INCOME_PLAID_FIELDS
                default:
                    return []
            }
        default:
            return []
    }
}
