import clsx from "clsx";
import s from "./Reel.module.scss";
import FortuneItem from "entities/fortuneItem";

const Reel = ({ reelsData, className = "", reelRef, ...props }: any) => {

    return (
        <div className={clsx(s.reel, className)} ref={reelRef} {...props}>
            {reelsData?.map((data: any, index: any) => {
                return (<FortuneItem key={data.value + index} dataindex={index} data={data} />)
            })}
        </div>
    );
}

export default Reel; 