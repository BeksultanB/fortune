import Spin from 'features/spin';
import Reel from 'entities/reel';
import slides from './slides';

import s from './fortune.module.scss';
import shuffleArray from 'shared/utils/shuffleArray';
import { useEffect, useRef, useState } from 'react';


function Fortune({ spinCounter, reelRef, spinHandler, prize }: any) {
    const exceptions = useRef<any>([]);
    const [reelsData, setReelsData] = useState<any>(shuffleArray(slides));
    const filteredData = reelsData.filter((item: any) => !exceptions.current.includes(item));
    let multipleReelsData: any = [];

    for (let i = 0; multipleReelsData.length < 80; i++) {
        multipleReelsData = [...multipleReelsData, ...filteredData];
    }
    multipleReelsData.length = 80;

    useEffect(() => {
        if (spinCounter) {
            setReelsData(shuffleArray(slides))
        }
    }, [spinCounter]);
    useEffect(() => {
        if (prize) {
            if (exceptions.current.length === (slides.length - 1)) {
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