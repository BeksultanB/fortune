import SpinButton from "entities/spinButton";
import { useRef } from "react";
import getRandomNumber from "shared/utils/getRandomNumber";

const Spin = ({ swiperRef, onSpin, slides }: any) => {
    const isSpinning = useRef(false);

    const spinHandler = () => ({ swiperRef, onSpin, slides })

    return (
        <SpinButton onClick={spinHandler}></SpinButton>
    );
}

export default Spin