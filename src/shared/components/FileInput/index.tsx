
import { useRef, useState } from "react";
import s from "./FileInput.module.scss"
import Text from "shared/ui/Text";
import GarbageIcon from "shared/ui/icon/GarbageIcon";

function FileInput({ onChange, onClear, placeholder = "Выберите файл", ...props }: any) {
    const [file, setFile] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: any) => {
        const file = event.target.files[0];
        if (file) {
            setFile(file.name);
        }
        onChange(event)
    };

    function clearInput() {
        inputRef.current && (inputRef.current.value = "")
        setFile("")
        onClear()
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <input ref={inputRef} className={s.input} type="file" id="s.input" onChange={handleFileChange} {...props} />
                <label className={s.label} htmlFor={s.input}>
                    <Text className={s.fileName}>
                        {file ? file : placeholder}
                    </Text>
                </label>
            </div>
            <div className={s.deleteIconconWrapper} onClick={clearInput}>
                <GarbageIcon width={25} height={25} fill="white" className={s.deleteIcon} />
            </div>
        </div>

    )
}

export default FileInput