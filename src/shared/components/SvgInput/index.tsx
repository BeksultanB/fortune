import { useState } from "react";
import FileInput from "../FileInput";
import SvgPreviewer from "../SvgPreviewer";

import s from "./SvgInput.module.scss"

const SvgInput = ({ preview, previewWidth = 100, previewHeight = 100, defaultValue, onChange, ...props }: any) => {
    const [svg, setSvg] = useState<any>('');

    const changeValue = onChange ? onChange : setSvg;
    const value = defaultValue ? defaultValue : svg

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                const text = e.target.result;
                const parser = new DOMParser();
                const svgDoc = parser.parseFromString(text, "image/svg+xml");
                const svg = svgDoc.querySelector("svg");
                svg?.setAttribute("width", previewWidth)
                svg?.setAttribute("height", previewHeight)
                svg?.setAttribute("class", "svg-input_preview")
                const serializer = new XMLSerializer();
                const svgString = serializer.serializeToString(svgDoc);
                changeValue(svgString);
            };
            reader.readAsText(file);
        }
    };


    function clearHandler() {
        changeValue("")
    }

    return (
        <div className={s.wrapper}>
            <FileInput accept="image/svg+xml" onChange={handleFileChange} onClear={clearHandler} {...props} />
            {preview && <SvgPreviewer svg={value} />}
        </div>
    )
}

export default SvgInput;