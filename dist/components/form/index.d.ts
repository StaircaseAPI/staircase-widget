/// <reference types="react" />
import { Field } from "../widget/form_fields";
import { Styles } from "../widget/interfaces";
interface Props {
    fields: Field[];
    onFormComplete: (res: any) => any;
    styles: Styles;
}
export declare const FormComponent: ({ fields, onFormComplete, styles }: Props) => JSX.Element;
export {};
