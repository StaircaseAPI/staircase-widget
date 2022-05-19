/// <reference types="react" />
import { Field } from '../../constants';
interface Props {
    fields: Field[];
    onFormComplete: any;
    isLoading: boolean;
    styles: any;
}
export declare const FormComponent: ({ fields, onFormComplete, isLoading, styles }: Props) => JSX.Element;
export {};
