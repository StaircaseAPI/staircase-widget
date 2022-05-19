import { useForm } from 'react-hook-form'
import { ThemeTypings } from '@chakra-ui/styled-system'
import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Select,
    Text,
} from '@chakra-ui/react'

import { ColorPicker } from './form_controls/color'
import { Field } from '../../constants'

interface Props {
    fields: Field[]
    onFormComplete: any
    isLoading: boolean
    styles: any
}

export const FormComponent = ({
    fields,
    onFormComplete,
    isLoading,
    styles
}: Props) => {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onFormComplete)}>
            {fields.map(
                (
                    { name, placeholder, type, validation, label, options },
                    index
                ) => {
                    {
                        switch (type) {
                            case 'file':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <Text
                                            color='#000000'
                                            fontSize='16px'
                                        >{label}</Text>
                                        <Input
                                            id={name}
                                            placeholder={placeholder}
                                            {...register(name, validation)}
                                        />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                )
                            case 'string':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <FormLabel htmlFor={name}>
                                            {label}
                                        </FormLabel>
                                        <Input
                                            id={name}
                                            placeholder={placeholder}
                                            borderRadius={0}
                                            padding='12px 20px'
                                            fontSize='12px'
                                            {...register(name, validation)}
                                        />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                )
                            case 'select':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <FormLabel htmlFor={name}>
                                            {label}
                                        </FormLabel>
                                        <Select
                                            id={name}
                                            variant="filled"
                                            placeholder={placeholder}
                                            {...register(name, validation)}
                                        >
                                            <>
                                                {options?.map(
                                                    (
                                                        option: string,
                                                        key: number
                                                    ) => {
                                                        return (
                                                            <option
                                                                value={option}
                                                                key={key}
                                                            >
                                                                {option}
                                                            </option>
                                                        )
                                                    }
                                                )}
                                            </>
                                        </Select>
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                )
                            case 'color':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <FormLabel htmlFor={name}>
                                            {label}
                                        </FormLabel>
                                        <ColorPicker
                                            onColorPick={(color: any) => {
                                                setValue(name, color)
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {errors.name && errors.name.message}
                                        </FormErrorMessage>
                                    </FormControl>
                                )
                            default:
                                break
                        }
                    }
                }
            )}
            <Button
                w="100%"
                my="15px"
                bg={!styles.submitButton ? '#04aa6d' : undefined}
                borderRadius={0}
                variant="solid"
                type="submit"
                style={styles.submitButton ? styles.submitButton : undefined}
                _hover={styles['submitButton:hover'] ? styles.submitButton['submitButton:hover'] : {
                    bg: '#04aa6dc7',
                }}
                isLoading={isSubmitting || isLoading}
            >
                Save
            </Button>
        </form>
    )
}
