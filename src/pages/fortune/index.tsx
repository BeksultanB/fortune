import { useRef, useState } from "react";
import s from "./FortunePage.module.scss"
import Fortune from "widgets/fortune";
import LastPrizes from "widgets/lastPrizes";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneTriangle from "shared/ui/icon/FortuneTriangle";
import FortuneCongratulations from "entities/fortuneCongratulations";
import slides from "widgets/fortune/slides";

function FortunePage() {
    const [prize, setPrize] = useState<any>(null);
    const [spinCounter, setSpinCounter] = useState<any>(0);
    const [showCongratulations, setShowCongratulations] = useState<any>(false);
    const reelRef = useRef<any>(null);
    const containerRef = useRef<any>(null);


    const startAutoplay = () => {
        setSpinCounter(spinCounter + 1)
        setShowCongratulations(false)
    };

    const handleSpin = () => {
        setShowCongratulations(true);
        const nodes = document.elementsFromPoint(reelRef.current.clientWidth / 2, containerRef.current.clientHeight / 2);
        const currentItem = nodes.find(node => node.className.includes("fortuneSlot"));
        //@ts-ignore
        const value = currentItem.dataset.value
        const prize = slides.find(item => item.value === value)
        setPrize(prize)
    }

    return (
        <div className={s.container} ref={containerRef}>
            <div className={s.rouletteWrapper}>
                <Fortune spinCounter={spinCounter} reelRef={reelRef} spinHandler={handleSpin} />
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
