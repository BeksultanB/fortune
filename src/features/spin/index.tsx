import SpinButton from "entities/spinButton";
import { useEffect, useState } from "react";

const Spin = ({ reelRef, onSpin, prize }: any) => {
    const [spinning, setSpinning] = useState<any>(false);
    const [reel, setReel] = useState<any>(null);

    const animation = reel?.animate([
        { top: 0, filter: "blur(0)" },
        { filter: "blur(2px)", offset: 0.5 },
        {
            top: `-${65 * 200}px`,

            filter: "blur(0)",
        },
    ],
        {
            duration: 8000,
            easing: "cubic-bezier(0.8, 0.3, 0.2, 0.9)",
            fill: 'forwards'
        })
    animation?.cancel();

    const spinHandler = () => {
        if (!spinning) {
            setSpinning(() => true)
            animation.play()
            setSpinning(() => false)
            animation.onfinish = () => {
                setTimeout(() => onSpin(prize), 700)
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