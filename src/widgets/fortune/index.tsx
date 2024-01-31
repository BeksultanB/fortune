import Spin from 'features/spin';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slides from './slides';

import s from './fortune.module.scss';
import FortuneItem from 'entities/fortuneItem';

function Fortune({ swiperRef, spinHandler }: any) {
    return (
        <>
            <Swiper
                loop
                freeMode={true}
                slidesPerView={9}
                spaceBetween={30}
                centeredSlides={true}
                speed={1000}
                modules={[Autoplay]}
                direction='vertical'
                className="mySwiper"
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {slides.map(slide => (
                    <SwiperSlide
                        key={slide.value}
                        className={s.slide}
                        style={{ background: slide.color }}>
                        <FortuneItem wrapped data={slide} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={s.shadowBox}>
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