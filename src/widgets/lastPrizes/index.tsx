import clsx from "clsx";
import { useEffect, useState } from "react";

import s from "./LastPrizes.module.scss"
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneItem from "entities/fortuneItem";

const LastPrizes = ({ prize, className = "", list, ...props }: any) => {
    const [prizes, setPrizes] = useState<any>([]);

    useEffect(() => {
        setPrizes(() => {
            const wonPrizes = list.filter((item: any) => {
                const localState = JSON.parse(localStorage.getItem("wonPrizes") || "{}");
                return localState[item.value] !== undefined;
            })
            return wonPrizes
        })
    }, [list, Object.keys(JSON.parse(localStorage.getItem("wonPrizes") || "{}")).length])

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