import SpinButton from "entities/spinButton";
import { useEffect, useState } from "react";

const Spin = ({ reelRef, handleSpin, handleWin, disabled }: any) => {
    const [spinning, setSpinning] = useState<any>(false);
    const [reel, setReel] = useState<any>(null);
    const [top, setTop] = useState(0)


    const spinHandler = () => {
        if (!spinning) {
            setSpinning(() => true)

            const shadowBox = document.querySelector(".shadow-box");
            // @ts-ignore
            const shadowAnimation = shadowBox.animate([
                { boxShadow: "inset 0px 0px 200px 60px rgb(0, 0, 0)", transfrom: "translate3d(0, 0, 0)" },
                { boxShadow: "inset 0px 0px 200px 600px rgb(0, 0, 0)" },
                { boxShadow: "inset 0px 0px 200px 60px rgb(0, 0, 0)" },
            ],
                {
                    duration: 1800,
                    easing: "ease-in-out",
                    // @ts-ignore
                });
            setTimeout(() => {
                reel.style.top = top;
                handleSpin()
            }, 700)

            const spinAnimation = reel?.animate([
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
                    fill: 'forwards',
                    delay: 1000
                })
            spinAnimation.onfinish = () => {
                setTimeout(() => {
                    setSpinning(() => false)
                    handleWin()
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