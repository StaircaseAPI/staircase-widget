import { useForm } from 'react-hook-form'
import { FileUploader } from "react-drag-drop-files";
import {
    FormErrorMessage,
    FormControl,
    Input,
    Button,
    Select,
    Text,
} from '@chakra-ui/react'

import { ColorPicker } from './form_controls/color'
import { Field } from "../widget/form_fields";
import { Styles } from "../widget/interfaces";

interface Props {
    fields: Field[]
    onFormComplete: (res: any) => any
    styles: Styles
}

export const FormComponent = ({
    fields,
    onFormComplete,
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
                    {
                        name,
                        placeholder,
                        type,
                        validation,
                        label,
                        options,
                        types
                    },
                    index
                ) => {
                    {
                        let component
                        switch (type) {
                            case 'file':
                                component = (
                                    <FileUploader
                                        id="fileUploader"
                                        handleChange={(ev: File) => setValue(name, ev)}
                                        name="file"
                                        types={types}
                                        label="Drag or Click here to upload"
                                        multiple={false}
                                    />
                                )
                                break
                            case 'string':
                            case 'password':
                                component = (
                                    <Input
                                        id={name}
                                        placeholder={placeholder}
                                        sx={styles?.input}
                                        type={type === 'password' ? type : 'text'}
                                        _hover={styles['input:hover']}
                                        _focus={styles['input:focus']}
                                        _focusWithin={styles['input:focusWithin']}
                                        _active={styles['input:active']}
                                        _visited={styles['input:visited']}
                                        borderRadius={0}
                                        padding='12px 20px'
                                        fontSize='12px'
                                        {...register(name, validation)}
                                    />
                                )
                                break
                            case 'select':
                                component = (
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
                                )
                                break
                            case 'color':
                                component = (
                                    <ColorPicker
                                        onColorPick={(color: any) => {
                                            setValue(name, color)
                                        }}
                                    />
                                )
                                break
                            default:
                                component = (
                                    <Input
                                        id={name}
                                        placeholder={placeholder}
                                        sx={styles?.input}
                                        _hover={styles['input:hover']}
                                        _focus={styles['input:focus']}
                                        _focusWithin={styles['input:focusWithin']}
                                        _active={styles['input:active']}
                                        _visited={styles['input:visited']}
                                        borderRadius={0}
                                        padding='12px 20px'
                                        fontSize='12px'
                                        {...register(name, validation)}
                                    />
                                )
                                break
                        }
                        return <FormControl
                            key={index}
                            pt="15px"
                            isInvalid={errors[name]}
                        >
                            <Text
                                sx={styles?.inputLabel}
                                color='#000000'
                                fontSize='16px'
                            >{label}</Text>
                            {component}
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                    }
                }
            )}
            <Button
                w="100%"
                my="15px"
                bg={'#04aa6d'}
                borderRadius={0}
                variant="solid"
                type="submit"
                sx={styles?.submitButton}
                _hover={styles['submitButton:hover'] ? styles['submitButton:hover'] : {
                    bg: '#04aa6dc7',
                }}
                isLoading={isSubmitting}
            >
                Save
            </Button>
        </form>
    )
}
