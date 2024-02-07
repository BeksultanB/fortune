import SpinButton from "entities/spinButton";
import { useEffect, useState } from "react";

const Spin = ({ reelRef, onSpin, prize, disabled }: any) => {
    const [spinning, setSpinning] = useState<any>(false);
    const [reel, setReel] = useState<any>(null);
    const [top, setTop] = useState(0)


    const spinHandler = () => {
        if (!spinning) {
            setSpinning(() => true)
            const animation = reel?.animate([
                { top, filter: "blur(0)", transfrom: "translate3d(0, 0, 0)" },
                { filter: "blur(2px)", offset: 0.5 },
                {
                    top: `calc(${-(65 * 200)}px + (${top}))`,
                    filter: "blur(0)",
                },
            ],
                {
                    duration: 8000,
                    easing: "cubic-bezier(0.7, 0.3, 0.2, 0.9)",
                    fill: 'forwards'
                })
            animation.onfinish = () => {
                setTimeout(() => {
                    setSpinning(() => false)
                    onSpin((prize))
                    reel.style.top = top;
                }, 700)
            }
        }
    }

    useEffect(() => {
        setReel(reelRef.current)
        // @ts-ignore
        setTop(getComputedStyle(reelRef.current).top)
    }, [reelRef.current]);

    return (
        <SpinButton onClick={spinHandler} disabled={spinning || disabled}></SpinButton>
    );
}

export default Spin