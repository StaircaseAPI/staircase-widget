/// <reference types="react" />
interface Props {
    token: string;
    onComplete: (result: any) => any;
    onError: () => any;
}
export declare const sleep: (ms: any) => Promise<unknown>;
export declare const WidgetComponent: (props: Props) => JSX.Element;
export {};
