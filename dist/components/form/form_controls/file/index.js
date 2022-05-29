import { jsx as _jsx } from "react/jsx-runtime";
import { FileUploader } from "react-drag-drop-files";
export var FileFormControlComponent = function (_a) {
    var multiple = _a.multiple, types = _a.types, handleChange = _a.handleChange;
    return _jsx(FileUploader, { id: "fileUploader", handleChange: handleChange, name: "file", types: types, label: "Drag or Click here to upload", multiple: multiple }, void 0);
};
