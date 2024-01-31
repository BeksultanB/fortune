import Congratulations from "shared/ui/Congratulations";
import s from "./FortuneCongratulations.module.scss"
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import FortuneItem from "entities/fortuneItem";

function FortuneCongratulations({ prize, ...props }: any) {

    return (
        prize ? <Congratulations className={s.congratulations} {...props}>
            <div className={s.content}>
                <div className={s.info}>
                    <Subtitle className={s.subtitle}>Поздравляем!</Subtitle>
                    <Text className={s.text}>Вы выиграли</Text>
                </div>
                <FortuneItem className={s.prize} data={prize} />
            </div>
        </Congratulations> : null
    )
}

export default FortuneCongratulations
