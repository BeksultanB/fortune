import { useState } from "react";

import s from "./ColorInput.module.scss"
import TextInput from "../TextInput";

const ColorInput = ({ onChange, defaultValue }: any) => {
    const [color, setColor] = useState('#f0f0f0');

    const changeValue = onChange ? onChange : setColor;
    const value = defaultValue ? defaultValue : color

    const handleColorChange = (event: any) => {
        changeValue(event.target.value);
    };

    const handleTextChange = (event: any) => {
        const value = event.target.value;
        if (/^#[0-9A-F]{6}$/i.test(value)) {
            changeValue(value);
        }
    };

    return (
        <div className={s.wrapper}>
            <TextInput value={value} onChange={handleTextChange} placeholder="Введите HEX цвет" />
            <input className={s.colorInput} type="color" value={value} onChange={handleColorChange} />
            <div className={s.preview} style={{ backgroundColor: value }} />
        </div>
    );
};

export default ColorInput;