import clsx from "clsx"
import s from "./Subtitle.module.scss"

const Subtitle = ({ className = "", children, ...props }: any) => {
    return (
        <h2 className={clsx("subtitle", s.subtitle, className)} {...props}>
            {children}
        </h2>
    );
}

export default Subtitle;