import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import s from "./LastPrizes.module.scss"
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneItem from "entities/fortuneItem";

const LastPrizes = ({ prize, className = "", list, ...props }: any) => {
    const [prizes, setPrizes] = useState<any>([prize]);
    const prevList = useRef(list)

    useEffect(() => {
        if (list !== prevList) {
            setPrizes([])
        }
    }, [list]);
    useEffect(() => {
        setPrizes((prev: any) => {
            if (prev.includes(prize)) {
                return prev
            }
            else return [...prev, prize]
        })
    }, [prize])

    return (
        <div className={clsx(s.container, className)} {...props}>
            <div className={s.header}>
                <Subtitle className={s.subtitle}>Последние выигрыши</Subtitle>
                <Text className={s.text}>Что досталось победителям</Text>
            </div>
            <div className={s.prizes}>
                {prizes.map((prizeData: any, i: any) => {
                    return (
                        <FortuneItem
                            style={{ background: "#f6f6f6" }}
                            className={s.prize}
                            key={prizeData.value + i}
                            iconProps={{ width: "80", height: "80" }}
                            data={prizeData}
                            showDiff
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default LastPrizes;