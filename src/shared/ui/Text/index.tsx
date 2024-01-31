import clsx from "clsx"
import s from "./Text.module.scss"

const Text = ({ className = "", children, ...props }: any) => {
    return (
        <span className={clsx("text", s.text, className)} {...props}>
            {children}
        </span>
    );
}

export default Text;