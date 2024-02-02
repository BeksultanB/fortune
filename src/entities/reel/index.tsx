import clsx from "clsx";
import s from "./Reel.module.scss";
import FortuneItem from "entities/fortuneItem";

const Reel = ({ reelsData, className = "", reelRef, ...props }: any) => {

    return (
        <div className={clsx(s.reel, className)} ref={reelRef} {...props}>
            {reelsData?.map((data: any, index: any) => {
                return (
                    <div key={data.value + index} className={clsx("fortuneSlot", s.fortuneSlot)} data-value={data.value}>
                        <FortuneItem dataindex={index} data={data} />
                    </div>
                )
            })}
        </div>
    );
}

export default Reel; 