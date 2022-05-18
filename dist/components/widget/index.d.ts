/// <reference types="react" />
import { ThemeTypings } from "@chakra-ui/styled-system";
interface Props {
    title: string;
    bodyText: string;
    buttonText: string;
    buttonColorSchema: ThemeTypings["colorSchemes"];
}
export declare const WidgetComponent: ({ title, bodyText, buttonText, buttonColorSchema }: Props) => JSX.Element;
export {};
