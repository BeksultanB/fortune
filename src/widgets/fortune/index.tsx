import Spin from 'features/spin';
import Reel from 'entities/reel';
// import fortuneItems from 'shared/constants/fortuneItems';

import s from './fortune.module.scss';
import shuffleArray from 'shared/utils/shuffleArray';
import { useEffect, useRef, useState } from 'react';


function Fortune({ spinCounter, reelRef, spinHandler, prize, list }: any) {
    const exceptions = useRef<any>([]);
    const [reelsData, setReelsData] = useState<any>(list);
    const filteredData = filter(reelsData);
    let multipleReelsData: any = [];

    if (filteredData.length) {
        for (let i = 0; multipleReelsData.length < 100; i++) {
            multipleReelsData = [...multipleReelsData, ...filteredData];
        }
        multipleReelsData.length = 100;
    }

    function filter(dataArray: any) {
        const localState = JSON.parse(localStorage.getItem("wonPrizes") || "{}");
        const result = dataArray.map((item: any) => {
            item.left = item.count - (localState[item.value] || 0);
            if (item.left === 0) {
                if (!exceptions.current.includes(item)) {
                    exceptions.current = [...exceptions.current, item]
                }
            }
            return item
        })
        return result.filter((item: any) => !exceptions.current.includes(item))
    }

    useEffect(() => {
        if (spinCounter) {
            setReelsData(shuffleArray(reelsData))
        } else {
            setReelsData(list)
        }
    }, [spinCounter, list]);
    useEffect(() => {
        exceptions.current = [];
    }, [list]);
    useEffect(() => {
        (async function () {
            if (prize) {
                if (prize.left === 0) {
                    exceptions.current = [...exceptions.current, prize];
                    // if (exceptions.current.length === list.length) {
                    //     exceptions.current = [];
                    //     setTimeout(async () => {

                    //         const res = await refreshList();
                    //         setReelsData(res)
                    //     }, 700)
                    // }
                }
            }
        })()
    }, [prize?.left, prize?.value]);

    return (
        <>
            <Reel {...{ reelRef, reelsData: multipleReelsData }} />
            <div className={s.shadowBox} >
                <div className={s.buttonWrapper}>
                    <Spin {...{ reelRef, prize: multipleReelsData[66], onSpin: spinHandler, disabled: !multipleReelsData.length }} />
                </div>
            </div>
        </>
    );
}
export default Fortune