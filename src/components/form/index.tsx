import { useForm } from 'react-hook-form'
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
import { Field } from "../widget/form_fields";
import { FileUploader } from "react-drag-drop-files";

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
                        switch (type) {
                            case 'file':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <Text
                                            style={styles.inputLabel ? styles.inputLabel : undefined}
                                            color='#000000'
                                            fontSize='16px'
                                        >{label}</Text>
                                        <FileUploader
                                            id="fileUploader"
                                            handleChange={(ev: File) => setValue(name, ev)}
                                            name="file"
                                            types={types}
                                            label="Drag or Click here to upload"
                                            multiple={false}
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
                                        <Text
                                            style={styles.inputLabel ? styles.inputLabel : undefined}
                                            color='#000000'
                                            fontSize='16px'
                                        >{label}</Text>
                                        <Input
                                            id={name}
                                            placeholder={placeholder}
                                            style={styles.input ? styles.input : undefined}
                                            _hover={styles['input:hover'] ? styles['input:hover'] : undefined}
                                            _focus={styles['input:focus'] ? styles['input:focus'] : undefined}
                                            _focusWithin={styles['input:focusWithin'] ? styles['input:focusWithin'] : undefined}
                                            _active={styles['input:active'] ? styles['input:active'] : undefined}
                                            _visited={styles['input:visited'] ? styles['input:visited'] : undefined}
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
                            case 'password':
                                return (
                                    <FormControl
                                        key={index}
                                        pt="15px"
                                        isInvalid={errors[name]}
                                    >
                                        <Text
                                            style={styles.inputLabel ? styles.inputLabel : undefined}
                                            color='#000000'
                                            fontSize='16px'
                                        >{label}</Text>
                                        <Input
                                            type="password"
                                            id={name}
                                            placeholder={placeholder}
                                            style={styles.input ? styles.input : undefined}
                                            _hover={styles['input:hover'] ? styles.submitButton['input:hover'] : undefined}
                                            _focus={styles['input:focus'] ? styles.submitButton['input:focus'] : undefined}
                                            _focusWithin={styles['input:focusWithin'] ? styles.submitButton['input:focusWithin'] : undefined}
                                            _active={styles['input:active'] ? styles.submitButton['input:active'] : undefined}
                                            _visited={styles['input:visited'] ? styles.submitButton['input:visited'] : undefined}
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
                                        <Text
                                            style={styles.inputLabel ? styles.inputLabel : undefined}
                                            color='#000000'
                                            fontSize='16px'
                                        >{label}</Text>
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
                isLoading={isSubmitting}
            >
                Save
            </Button>
        </form>
    )
}
