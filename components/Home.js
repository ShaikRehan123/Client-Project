import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import {EffectFade, Navigation, Pagination} from "swiper";
import Header from "./Header";
import {Turn as Ham} from "hamburger-react";

export default function App() {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='relative'>
            <div className='absolute top-[8px] z-10'>
                <Header/>
            </div>
            <div className='absolute top-[8px] right-[16px] z-10'>
                <div className='p-6 z-100'>
                    <div className="flex space-x-2.5  md:inline-flex hidden">
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'>Work</h1>
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'>Office</h1>
                        <h1 className='text-white font-bold text-2xl cursor-pointer font-mono hover:opacity-80'>Contact</h1>
                    </div>
                    <div className='inline-flex md:hidden h-full w-full'>
                        <Ham toggled={isOpen} toggle={setOpen} direction='top' color='#fff' onToggle={toggled => {
                            if (toggled) {
                                console.log('We shoudld open navbar');
                                document.body.classList.add('menu-open');
                            } else {
                                console.log('We shoudld open navbar');
                                document.body.classList.remove('menu-open');
                            }
                        }}/>
                        <div className="content">
                            <div>
                                <h1>
                                    Fullscreen Menu
                                </h1>
                                <h2>
                                    Flexbox Style
                                </h2>
                            </div>
                        </div>
                        <div className="menu-container">
                            <div className="menu-sliders"></div>
                            <div className="menu-sliders"></div>
                            <div className="menu-sliders"></div>
                            <div className="menu">
                                <ul>
                                    <li>
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        <a>About </a>
                                    </li>
                                    <li>
                                        <a>Work</a>
                                    </li>
                                    <li>
                                        <a>Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Swiper
                loop={true}
                spaceBetween={30}
                effect={"fade"}
                navigation={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
