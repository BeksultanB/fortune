import Spin from 'features/spin';
import Reel from 'entities/reel';
import fortuneItems from 'shared/constants/fortuneItems';

import s from './fortune.module.scss';
import shuffleArray from 'shared/utils/shuffleArray';
import { useEffect, useRef, useState } from 'react';


function Fortune({ spinCounter, reelRef, spinHandler, prize }: any) {
    const exceptions = useRef<any>([]);
    const [reelsData, setReelsData] = useState<any>(shuffleArray(fortuneItems));
    const filteredData = reelsData.filter((item: any) => !exceptions.current.includes(item));
    let multipleReelsData: any = [];

    for (let i = 0; multipleReelsData.length < 80; i++) {
        multipleReelsData = [...multipleReelsData, ...filteredData];
    }
    multipleReelsData.length = 80;

    useEffect(() => {
        if (spinCounter) {
            setReelsData(shuffleArray(fortuneItems))
        }
    }, [spinCounter]);
    useEffect(() => {
        if (prize) {
            if (exceptions.current.length === (fortuneItems.length - 1)) {
                exceptions.current = [];
            } else {
                exceptions.current = [...exceptions.current, prize]
            }
        }
    }, [prize]);

    return (
        <>
            <Reel {...{ reelRef, reelsData: multipleReelsData }} />
            <div className={s.shadowBox} >
                <div className={s.buttonWrapper}>
                    <Spin {...{ reelRef, prize: multipleReelsData[66], onSpin: spinHandler }} />
                </div>
            </div>
        </>
    );
}
export default Fortune