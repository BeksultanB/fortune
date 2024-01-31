import SpinButton from "entities/spinButton";
import { useRef } from "react";
import getRandomNumber from "shared/utils/getRandomNumber";

const Spin = ({ swiperRef, onSpin, slides }: any) => {
    const isSpinning = useRef(false);

    const spinHandler = () => {
        const swiper = swiperRef.current;
        if (!isSpinning.current) {
            const i = getRandomNumber(0, slides.length - 1);
            isSpinning.current = true;

            swiper.params.speed = 100;
            swiper.update();

            setTimeout(() => {
                swiper.autoplay.stop();
                swiper.slideToLoop(i);

                setTimeout(async () => {
                    onSpin?.(() => ({ ...slides[i] }))
                    swiper.params.speed = 1000;
                    swiper.update();
                    !onSpin && swiper.autoplay.start()
                    isSpinning.current = false;
                }, 700)
            }, 4000)
        }
    }

    return (
        <SpinButton onClick={spinHandler}></SpinButton>
    );
}

export default Spin