import Spin from 'features/spin';
import Reel from 'entities/reel';
import slides from './slides';

import s from './fortune.module.scss';
import shuffleArray from 'shared/utils/shuffleArray';
import { useEffect, useState } from 'react';


function Fortune({ spinCounter, reelRef, spinHandler }: any) {
    let [reelsData, setReelsData] = useState<any>(shuffleArray(slides));
    let multipleReelsData: any = [];
    for (let i = 0; multipleReelsData.length < 80; i++) {
        multipleReelsData = [...multipleReelsData, ...reelsData];
    }
    multipleReelsData.length = 80;
    const prize = multipleReelsData[66];

    useEffect(() => {
        if (spinCounter) {
            setReelsData(shuffleArray(slides))
        }
    }, [spinCounter]);
    return (
        <>
            <Reel {...{ reelRef, reelsData: multipleReelsData }} />
            <div className={s.shadowBox} >
                <div className={s.buttonWrapper}>
                    <Spin {...{ reelRef, prize, onSpin: spinHandler }} />
                </div>
            </div>
        </>
    );
}
export default Fortune