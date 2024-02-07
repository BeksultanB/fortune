import { useEffect, useRef, useState } from "react";
import s from "./FortunePage.module.scss"
import Fortune from "widgets/fortune";
import LastPrizes from "widgets/lastPrizes";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneTriangle from "shared/ui/icon/FortuneTriangle";
import FortuneCongratulations from "entities/fortuneCongratulations";
// import fortuneItems from "shared/constants/fortuneItems";
import { useNavigate } from "react-router-dom";
import { getList } from "shared/api/IndexedDB/FortuneItems/crud";

function FortunePage() {
    const [prize, setPrize] = useState<any>(null);
    const [list, setList] = useState<any>([])
    const [spinCounter, setSpinCounter] = useState<any>(0);
    const [showCongratulations, setShowCongratulations] = useState<any>(false);
    const reelRef = useRef<any>(null);
    const containerRef = useRef<any>(null);
    const navigate = useNavigate();

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
        const prize = list.find((item: any) => {
            return item.value === value
        })
        prize.left -= 1;
        // console.log(list)
        setPrize(prize)
    }

    function navigateToAdmin(e: any) {
        if (e.code === "KeyA") {
            navigate("/admin")
        }
    }
    async function fetchList() {
        const res = await getList();
        setList(res)
        return res
    }

    useEffect(() => {
        fetchList()
    }, []);

    return (
        <div className={s.container} ref={containerRef}>
            <div className={s.rouletteWrapper}>
                <Fortune {...{ spinCounter, reelRef, prize, list }} refreshList={fetchList} spinHandler={handleSpin} />
            </div>
            <div className={s.content}>
                <div className={s.secretDoor} tabIndex={-1} onKeyDown={navigateToAdmin}></div>
                {
                    prize ?
                        <LastPrizes prize={prize} list={list} /> :
                        <div className={s.contentWrapper}>
                            <Subtitle className={s.contentTitle}>Пока еще никто <br /> не участвовал</Subtitle>
                            <Text className={s.contentInfo}>Но вы можете стать первым</Text>
                        </div>
                }
                <div className={s.triangleWrapper}><FortuneTriangle /></div>
                <div className="toJustifyContent"></div>
            </div>
            {showCongratulations && <FortuneCongratulations prize={prize} onOutsideClick={startAutoplay} />}
        </div>
    )
}

export default FortunePage
