import clsx from "clsx";
import s from "./Congratulations.module.scss"
import ReactConfetti from "react-confetti";
import { useEffect, useState } from "react";

function Congratulations({ children, className, onOutsideClick, ...props }: any) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    function handleClick(e: any) {
        if (e.target === e.currentTarget) {
            onOutsideClick()
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className={clsx(s.congratulations, className)} onClick={handleClick} {...props}>
            <ReactConfetti width={width} height={height} />
            <div className={s.content}>
                {children}
            </div>
        </div>
    )
}

export default Congratulations
