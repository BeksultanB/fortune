import clsx from "clsx";
import s from "./FortuneItem.module.scss";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";
import SvgPreviewer from "shared/components/SvgPreviewer";

const FortuneItem = ({
    data,
    wrapped = false,
    className = "",
    iconProps,
    style,
    showValue,
    showLeft = false,
    showDiff = false,
    showCount,
    ...props
}: any) => {
    const { icon, label, value, count, left, color } = data;

    const ownStyle = wrapped ? {} : { background: color };
    const ownClass = wrapped ? s.fortuneItemWrapped : s.fortuneItem;

    return (
        <div className={clsx("fortuneItem", ownClass, className)} style={{ ...ownStyle, ...style }} {...props}>
            <div className={clsx("fortuneIcon", s.fortuneIcon)}>
                {icon && <SvgPreviewer svg={icon} {...iconProps} />}
            </div>
            <div className={s.fortuneContent}>
                <Subtitle>{label}</Subtitle>
                <Text>
                    {showValue && value + ": "}
                    {showLeft ? `Осталось призов: ${left}` : ""}
                    {showCount ? count : ""}
                    {showDiff ? `Выиграно: ${count - left} из ${count}` : ""}
                </Text>
            </div>
        </div>

    );
}

export default FortuneItem; 