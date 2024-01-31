import { useRef, useState } from "react";
import s from "./FortunePage.module.scss"
import Fortune from "widgets/fortune";
import LastPrizes from "widgets/lastPrizes";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneTriangle from "shared/ui/icon/FortuneTriangle";
import FortuneCongratulations from "entities/fortuneCongratulations";

function FortunePage() {
    const [prize, setPrize] = useState<any>(null);
    const [showCongratulations, setShowCongratulations] = useState<any>(false);
    const swiperRef = useRef<any>(null);

    const startAutoplay = () => {
        setShowCongratulations(false)
        swiperRef.current.autoplay.start()
    };

    const handleSpin = (slide: any) => {
        setPrize(slide)
        setShowCongratulations(true);
    }

    return (
        <div className={s.container}>
            <div className={s.rouletteWrapper}>
                <Fortune swiperRef={swiperRef} spinHandler={handleSpin} />
            </div>
            <div className={s.content}>
                {
                    prize ?
                        <LastPrizes prize={prize} /> :
                        <div className={s.contentWrapper}>
                            <Subtitle className={s.contentTitle}>Пока еще никто <br /> не участвовал</Subtitle>
                            <Text className={s.contentInfo}>Но вы можете стать первым</Text>
                        </div>
                }
                <div className={s.triangleWrapper}><FortuneTriangle /></div>
            </div>
            {showCongratulations && <FortuneCongratulations prize={prize} onOutsideClick={startAutoplay} />}
        </div>
    )
}

export default FortunePage
