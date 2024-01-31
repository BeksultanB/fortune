import clsx from "clsx";
import s from "./FortuneItem.module.scss";
import Subtitle from "shared/ui/Subtitle";
import Text from "shared/ui/Text";

const FortuneItem = ({ data, wrapped = false, className = "", iconProps, style, ...props }: any) => {
    const { icon: Icon, label, value, count, color } = data;

    const ownStyle = wrapped ? {} : { background: color };
    const ownClass = wrapped ? s.fortuneItemWrapped : s.fortuneItem;

    return (
        <div className={clsx(ownClass, className)} style={{ ...ownStyle, ...style }} {...props}>
            <div className={clsx("fortuneIcon", s.fortuneIcon)}><Icon {...iconProps} /></div>
            <div className={s.fortuneContent}>
                <Subtitle>{label}</Subtitle>
                <Text>{count}</Text>
            </div>
        </div>

    );
}

export default FortuneItem; 