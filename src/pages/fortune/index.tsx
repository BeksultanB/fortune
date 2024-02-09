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
import shuffleArray from "shared/utils/shuffleArray";

function FortunePage() {
    const navigate = useNavigate();
    const reelRef = useRef<any>(null);
    const containerRef = useRef<any>(null);

    const [prize, setPrize] = useState<any>(null);
    const [list, setList] = useState<any>([])
    const [showCongratulations, setShowCongratulations] = useState<any>(false);
    const [exceptions, setExceptions] = useState<any>([]);

    const wonPrizes = JSON.parse(localStorage.getItem("wonPrizes") || "{}");

    function handleWin() {
        setShowCongratulations(true);
        const wonPrizes = JSON.parse(localStorage.getItem("wonPrizes") || "{}");
        const nodes = document.elementsFromPoint(reelRef.current.clientWidth / 2, containerRef.current.clientHeight / 2);
        const currentItem = nodes.find(node => node.className.includes("fortuneSlot"));
        //@ts-ignore
        const value = currentItem.dataset.value
        const prize = list.find((item: any) => {
            return item.value === value
        })
        prize.left -= 1;
        wonPrizes[prize.value] = prize.count - prize.left;
        localStorage.setItem("wonPrizes", JSON.stringify(wonPrizes))
        setPrize(prize)
    }

    function handleSpin(callback: any) {
        callback()
        setList(shuffleArray(list))
        if (prize?.left === 0 && !exceptions.includes(prize)) {
            setExceptions((prev: any) => [...prev, prize])
        }
    }

    function handleCongratulationsClose() {
        setShowCongratulations(false)
    }

    function handleClick() {
        navigate("/admin")
    }
    function handleCopy() {
        localStorage.setItem("wonPrizes", JSON.stringify({}));
        fetchList()
    }

    async function fetchList() {
        const res = await getList();
        setList(shuffleArray(res))
        return res
    }
    useEffect(() => {
        const wonItems = list.filter((item: any) => {
            item.left = item.count - (wonPrizes[item.value] || 0);
            return !item.left
        })
        setExceptions(wonItems)
    }, [list]);
    useEffect(() => {
        fetchList()
    }, []);

    return (
        <div className={s.container} ref={containerRef}>
            <div className={s.rouletteWrapper}>
                <Fortune
                    reelRef={reelRef}
                    list={list}
                    exceptions={exceptions}
                    refreshList={fetchList}
                    handleSpin={handleSpin}
                    handleWin={handleWin}
                    prize={prize}
                />
            </div>
            <div className={s.content}>
                <div className={s.secretDoor} tabIndex={-1} onContextMenu={handleCopy} onClick={handleClick} onCopy={handleCopy}></div>
                {
                    Object.keys(wonPrizes).length ?
                        <LastPrizes list={list} /> :
                        <div className={s.contentWrapper}>
                            <Subtitle className={s.contentTitle}>Пока еще никто <br /> не участвовал</Subtitle>
                            <Text className={s.contentInfo}>Но вы можете стать первым</Text>
                        </div>
                }
                <div className={s.triangleWrapper}><FortuneTriangle /></div>
                <div className="toJustifyContent"></div>
            </div>
            {showCongratulations && <FortuneCongratulations prize={prize} onOutsideClick={handleCongratulationsClose} />}
        </div>
    )
}

export default FortunePage
