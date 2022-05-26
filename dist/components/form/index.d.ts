/// <reference types="react" />
import { Field } from "../widget/form_fields";
interface Props {
    fields: Field[];
    onFormComplete: any;
    styles: any;
}
export declare const FormComponent: ({ fields, onFormComplete, styles }: Props) => JSX.Element;
export {};
