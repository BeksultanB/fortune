import Congratulations from "shared/ui/Congratulations";
import s from "./FortuneCongratulations.module.scss"
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneItem from "entities/fortuneItem";
import { useEffect } from "react";
import clsx from "clsx";

function FortuneCongratulations({ prize, ...props }: any) {


    useEffect(() => {
        setTimeout(() => {
            const subtitle = document.querySelector("." + s.subtitle)
            const you = document.querySelector("." + s.you)
            const win = document.querySelector("." + s.win)
            const prize = document.querySelector("." + s.prize)

            //@ts-ignore
            subtitle && (subtitle.style.left = "0")
            //@ts-ignore
            you && (you.style.left = "0");
            //@ts-ignore
            win && (win.style.left = "0");
            //@ts-ignore
            prize && (prize.style.left = "0");
        }, 500)

    }, []);
    return (
        prize ? <Congratulations className={s.congratulations} {...props}>
            <div className={s.content}>
                <div className={s.info}>
                    <Subtitle className={s.subtitle}>Поздравляем!</Subtitle>
                    <div className={s.textContainer}>
                        <Text className={clsx(s.text, s.you)}>Вы</Text>
                        <Text className={clsx(s.text, s.win)}> выиграли</Text>
                    </div>
                </div>
                <FortuneItem className={s.prize} data={prize} />
            </div>
        </Congratulations> : null
    )
}

export default FortuneCongratulations
