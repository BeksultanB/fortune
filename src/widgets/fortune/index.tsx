import Spin from 'features/spin';
import Reel from 'entities/reel';
// import fortuneItems from 'shared/constants/fortuneItems';

import s from './fortune.module.scss';
import shuffleArray from 'shared/utils/shuffleArray';
import { useEffect, useRef, useState } from 'react';
import { getList } from 'shared/api/IndexedDB/FortuneItems/crud';


function Fortune({ spinCounter, reelRef, spinHandler, prize }: any) {
    const exceptions = useRef<any>([]);
    const [reelsData, setReelsData] = useState<any>([]);
    const filteredData = reelsData.filter((item: any) => !exceptions.current.includes(item));
    let multipleReelsData: any = [];

    if (reelsData.length) {
        for (let i = 0; multipleReelsData.length < 100; i++) {
            multipleReelsData = [...multipleReelsData, ...filteredData];
        }
        multipleReelsData.length = 100;
    }
    async function fetchList() {
        const list = await getList();
        setReelsData(list)
    }

    useEffect(() => {
        if (spinCounter) {
            setReelsData(shuffleArray(reelsData))
        }
    }, [spinCounter]);
    useEffect(() => {
        if (prize) {
            if (exceptions.current.length === (reelsData.length - 1)) {
                exceptions.current = [];
            } else {
                exceptions.current = [...exceptions.current, prize]
            }
        }
    }, [prize]);
    useEffect(() => {
        fetchList()
    }, []);

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