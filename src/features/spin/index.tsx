import SpinButton from "entities/spinButton";
import { useEffect, useState } from "react";
import getRandomNumber from "shared/utils/getRandomNumber";

const Spin = ({ reelRef, onSpin, prize }: any) => {
    const [spinning, setSpinning] = useState<any>(false);
    const [reel, setReel] = useState<any>(null);


    const spinHandler = () => {
        if (!spinning) {
            setSpinning(() => true)
            const animation = reel?.animate([
                { top: 0, filter: "blur(0)" },
                { filter: "blur(4px)", offset: 0.5 },
                {
                    top: `-${65 * 200 + (getRandomNumber(-4, 4) * 10)}px`,

                    filter: "blur(0)",
                },
            ],
                {
                    duration: 6000,
                    easing: "cubic-bezier(0.8, 0.3, 0.2, 0.9)",
                    fill: 'forwards'
                })
            animation.onfinish = () => {
                setTimeout(() => {
                    setSpinning(() => false)
                    onSpin((prize))
                }, 700)
            }
        }
    }

    useEffect(() => {
        setReel(reelRef.current)
    }, [reelRef.current]);

    return (
        <SpinButton onClick={spinHandler} disabled={spinning}></SpinButton>
    );
}

export default Spin