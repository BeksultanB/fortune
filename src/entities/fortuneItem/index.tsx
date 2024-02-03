import clsx from "clsx";
import s from "./FortuneItem.module.scss";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";

const FortuneItem = ({ data, wrapped = false, className = "", iconProps, style, showValue, ...props }: any) => {
    const { icon: Icon, label, value, color } = data;

    const ownStyle = wrapped ? {} : { background: color };
    const ownClass = wrapped ? s.fortuneItemWrapped : s.fortuneItem;

    return (
        <div className={clsx("fortuneItem", ownClass, className)} style={{ ...ownStyle, ...style }} {...props}>
            <div className={clsx("fortuneIcon", s.fortuneIcon)}>
                {Icon && <Icon width={100} height={100} {...iconProps} />}
            </div>
            <div className={s.fortuneContent}>
                <Subtitle>{label}</Subtitle>
                <Text>{showValue && value}</Text>
            </div>
        </div>

    );
}

export default FortuneItem; 