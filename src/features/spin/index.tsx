import SpinButton from "entities/spinButton";
import { useRef } from "react";
import getRandomNumber from "shared/utils/getRandomNumber";

const Spin = ({ swiperRef, onSpin, slides }: any) => {
    const isSpinning = useRef(false);

    const spinHandler = () => {
        if (!isSpinning.current) {
            isSpinning.current = true;
            const swiper = swiperRef.current;
            const duration = getRandomNumber(15, 20) * 1000;
            const setSpeed = (speed: any, timeout?: any) => {
                if (timeout) {
                    setTimeout(() => setSpeed(speed), timeout)
                } else {
                    swiper.params.speed = speed;
                    swiper.update();
                }
            }

            let timeout = 5000
            setSpeed(100)

            for (let speed = 150; timeout < duration; speed += 50) {
                setSpeed(speed, timeout)
                timeout = timeout + 500
            }

            setTimeout(() => {
                swiper.autoplay.stop();
                setTimeout(async () => {
                    onSpin?.(() => ({ ...slides[swiper.realIndex] }))
                    swiper.params.speed = 1000;
                    swiper.update();
                    !onSpin && swiper.autoplay.start();
                    isSpinning.current = false;
                }, 700)
            }, duration)
        }
    }

    return (
        <SpinButton onClick={spinHandler}></SpinButton>
    );
}

export default Spin