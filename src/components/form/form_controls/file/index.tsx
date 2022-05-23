import { FileUploader } from "react-drag-drop-files";

interface Props {
    multiple?: boolean
    types: string[]
    handleChange: (ev: any) => any
}

export const FileFormControlComponent = ({
    multiple,
    types,
    handleChange
                                         }: Props) => {
    return <FileUploader
        id="fileUploader"
        handleChange={handleChange}
        name="file"
        types={types}
        label="Drag or Click here to upload"
        multiple={multiple}
    />
}
