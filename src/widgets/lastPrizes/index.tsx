import clsx from "clsx";
import { useEffect, useState } from "react";

import s from "./LastPrizes.module.scss"
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneItem from "entities/fortuneItem";

const LastPrizes = ({ className = "", list, ...props }: any) => {
    const [prizes, setPrizes] = useState<any>([]);

    useEffect(() => {
        console.log(Object.values(JSON.parse(localStorage.getItem("wonPrizes") || "{}")).reduce((prev: any, current: any) => (prev + current),))
        setPrizes(() => {
            const localState = JSON.parse(localStorage.getItem("wonPrizes") || "{}");
            const wonPrizes: any = [];
            for (const value in localState) {
                const item = list?.find((item: any) => {
                    return item?.value === value
                });
                item && wonPrizes.push(item)
            }
            return wonPrizes
        })
    }, [list, Object.values(JSON.parse(localStorage.getItem("wonPrizes") || "{}")).reduce((prev: any, current: any) => (prev + current),)])

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
                            key={prizeData?.value + i}
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