import Spin from 'features/spin';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slides from './slides';

import s from './fortune.module.scss';
import FortuneItem from 'entities/fortuneItem';
import { cloneElement } from 'react';

function Fortune({ swiperRef, spinHandler }: any) {
    let clones: any = [];

    return (
        <>
            <div className={s.swiper}>
                {slides.map((slide, index) => {
                    const item = (<FortuneItem key={slide.value} dataindex={index} data={slide} />);
                    clones.push(cloneElement(item, { key: `${slide.value}-clone` }))

                    return item
                })}
            </div>
            <div className={s.swiperClone}>
                {clones}
            </div>
            <div className={s.shadowBox} >
                <div className={s.spinWrapper}>
                    <Spin
                        swiperRef={swiperRef}
                        slides={slides}
                        onSpin={spinHandler}
                    />
                </div>
            </div>
        </>
    );
}
export default Fortune