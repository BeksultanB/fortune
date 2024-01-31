import clsx from "clsx";
import s from "./Congratulations.module.scss"
import ReactConfetti from "react-confetti";

function Congratulations({ children, className, onOutsideClick, ...props }: any) {
    function handleClick(e: any) {
        if (e.target === e.currentTarget) {
            onOutsideClick()
        }
    }

    return (
        <div className={clsx(s.congratulations, className)} onClick={handleClick} {...props}>
            <ReactConfetti />
            <div className={s.content}>
                {children}
            </div>
        </div>
    )
}

export default Congratulations
