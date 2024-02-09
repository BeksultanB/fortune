import Spin from 'features/spin';
import Reel from 'entities/reel';
// import fortuneItems from 'shared/constants/fortuneItems';

import s from './fortune.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

function Fortune({ reelRef, exceptions, handleSpin, handleWin, list, prize }: any) {
    const [filteredData, setFilteredData] = useState([]);

    function filter(dataArray: any) {
        return dataArray.filter((item: any) => !exceptions.includes(item))
    }

    let multipleReelsData: any = [];

    if (filteredData.length) {
        for (let i = 0; multipleReelsData.length < 100; i++) {
            multipleReelsData = [...multipleReelsData, ...filteredData];
        }
        multipleReelsData.length = 100;
    }

    useEffect(() => {
        const arr = filter(list)
        console.log(arr)
        setFilteredData(arr)
    }, [list]);
    useEffect(() => {
        if (exceptions.length && !prize) {
            const arr = filter(list)
            console.log(arr)
            setFilteredData(arr)
        }
    }, [exceptions]);

    return (
        <>
            <Reel {...{ reelRef, reelsData: multipleReelsData }} />
            <div className={clsx("shadow-box", s.shadowBox)} >
                <div className={s.buttonWrapper}>
                    <Spin {
                        // @ts-ignore
                        ...{ prize, reelRef, handleSpin, handleWin, disabled: (filteredData.length === 1 && !filteredData[0]?.left) }
                    } />
                </div>
            </div>
        </>
    );
}
export default Fortune