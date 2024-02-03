import clsx from "clsx"
import s from "./IconButton.module.scss"

function IconButton({ children, className, ...props }: any) {
    return (
        <button className={clsx("button", s.button, className)} {...props}>
            {children}
        </button>
    )
}

export default IconButton