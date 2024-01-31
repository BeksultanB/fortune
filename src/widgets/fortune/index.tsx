import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import s from './fortune.module.scss';

import { Autoplay } from 'swiper/modules';
import ThermosIcon from 'shared/ui/icon/ThermosIcon';
import ChocolateIcon from 'shared/ui/icon/ChocolateIcon';
import TShirtIcon from 'shared/ui/icon/TShirtIcon';
import MapIcon from 'shared/ui/icon/MapIcon';
import PaintIcon from 'shared/ui/icon/PaintIcon';
import SecurityIcon from 'shared/ui/icon/SecurityIcon';
import BallIcon from 'shared/ui/icon/BallIcon';
import BagIcon from 'shared/ui/icon/BagIcon';
import CoffeeIcon from 'shared/ui/icon/CoffeeIcon';
import BookIcon from 'shared/ui/icon/BookIcon';
import CoreIcon from 'shared/ui/icon/CoreIcon';
import { useEffect, useRef, useState } from 'react';
import Spin from 'features/spin';
import ReactConfetti from 'react-confetti';
import FortuneTriangle from 'shared/ui/icon/FortuneTriangle';


const slides = [
    {
        icon: ThermosIcon,
        value: "thermos",
        label: "Термос",
        count: 5,
        color: "#A276FF"
    },
    {
        icon: ChocolateIcon,
        value: "chocolate",
        label: "Шоколад",
        count: 10,
        color: "#767BFF"
    },
    {
        icon: TShirtIcon,
        value: "t-shirts",
        label: "Футболки",
        count: 6,
        color: "#76B5FF"
    }
    ,
    {
        icon: MapIcon,
        value: "excursion",
        label: "Экскурсия по офису",
        count: 3,
        color: "#39DEE9"
    }
    ,
    {
        icon: PaintIcon,
        value: "logo",
        label: "Логотип",
        count: 1,
        color: "#18CA14"
    }
    ,
    {
        icon: SecurityIcon,
        value: "audit",
        label: "Аудит КБ",
        count: 1,
        color: "#FFCE21"
    }
    ,
    {
        icon: BallIcon,
        value: "antistress ball",
        label: "Антистресс мячик",
        count: 10,
        color: "linear-gradient(0deg, #6F14CA 0%, #6F14CA 100%), #A276FF"
    }
    ,
    {
        icon: BagIcon,
        value: "bag",
        label: "Шоппер",
        count: 4,
        color: "linear-gradient(0deg, #39AAFC 0%, #39AAFC 100%), #A276FF"
    }
    ,
    {
        icon: CoffeeIcon,
        value: "coffee with CEO",
        label: "Кофе с CEO",
        count: 1,
        color: "linear-gradient(0deg, #767BFF 0%, #767BFF 100%), #A276FF"
    }
    ,
    {
        icon: BookIcon,
        value: "litres subscription",
        label: "Подписка на Литрес",
        count: 3,
        color: "linear-gradient(0deg, #F58115 0%, #F58115 100%), #A276FF"
    }
    ,
    {
        icon: CoreIcon,
        value: "bot",
        label: "Телеграм Бот",
        count: 1,
        color: "linear-gradient(0deg, #A276FF 0%, #A276FF 100%), #A276FF"
    }
]

function getRandomNumber(min: number, max: number) {
    const numbers = Array.from({ length: max - min + 1 }, (v, k) => k + min);

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers[0];
}


export default function Fortune() {
    const [isActive, setIsActive] = useState(false);
    const [prize, setPrize] = useState<any>(null)
    const swiperRef = useRef<any>(null);
    const isSpinning = useRef(false);

    return (
        <div className={s.container}>
            <div className={s.rouletteWrapper}>
                <Swiper
                    freeMode={true}
                    slidesPerView={9}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    spaceBetween={30}
                    centeredSlides={true}
                    loop
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                    modules={[Autoplay]}
                    direction='vertical'
                    className="mySwiper"
                >
                    {slides.map(slide => {
                        const { icon: Icon, label, value, count, color } = slide;

                        return (
                            <SwiperSlide key={value} className={s.slide} style={{ background: color }}>
                                <div className={s.slide}>
                                    <div className={s.slideIcon}><Icon /></div>
                                    <div className={s.slideContent}>
                                        <span className={s.slideTitle}>{label}</span>
                                        <span className={s.slideCount}>{count} штук</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className={s.shadowBox}>
                    <div className={s.spinWrapper}>
                        <Spin onSpin={() => {
                            if (!isSpinning.current) {
                                const i = getRandomNumber(0, slides.length - 1);
                                isSpinning.current = true;

                                swiperRef.current.params.speed = 100;
                                swiperRef.current.update();

                                setTimeout(() => {
                                    swiperRef.current.autoplay.stop();
                                    swiperRef.current.slideToLoop(i);
                                    setTimeout(() => {
                                        setPrize(() => ({ ...slides[i] }))
                                        swiperRef.current.params.speed = 1000;
                                        swiperRef.current.update();
                                        isSpinning.current = false;
                                    }, 700)
                                }, 4000)
                            }

                        }} />
                    </div>
                </div>
            </div>
            <div className={s.content}>
                {
                    isActive ? <div>M</div> :
                        // <ActiveFortuneContent /> :
                        <div className={s.contentWrapper}>
                            <h2 className={s.contentTitle}>Пока еще никто <br /> не участвовал</h2>
                            <span className={s.contentInfo}>Но вы можете стать первым</span>
                        </div>
                }
                <div className={s.triangleWrapper}><FortuneTriangle /></div>
            </div>
            {prize ? <div className={s.congratulations} onClick={(e) => {
                if (e.target === e.currentTarget) {
                    setPrize(null)
                    swiperRef.current.autoplay.start();
                }
            }}>
                <ReactConfetti />
                <div className={s.prize} style={{ background: prize.color }}>
                    <div className={s.slideIcon}><prize.icon /></div>
                    <div className={s.slideContent}>
                        <span className={s.slideTitle}>{prize.label}</span>
                        <span className={s.slideCount}>{prize.count} штук</span>
                    </div>
                </div>
            </div> : null}
        </div>
    );
}
