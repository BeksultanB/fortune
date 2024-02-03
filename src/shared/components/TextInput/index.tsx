import { useState } from "react";

import s from "./TextInput.module.scss"

const TextInput = ({ onChange, defaultValue, ...props }: any) => {
    const [text, setText] = useState('');

    const handleTextChange = (event: any) => {
        setText(event.target.value);
    };

    const changeValue = onChange ? onChange : handleTextChange;
    const value = defaultValue ? defaultValue : text

    return (
        <div className={s.wrapper}>
            <input
                type="text"
                value={value}
                onChange={changeValue}
                placeholder="Введите текст"
                className={s.input}
                {...props}
            />
        </div>
    );
};

export default TextInput;