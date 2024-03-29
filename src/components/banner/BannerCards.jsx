
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SearchBar from './SearchBar';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCards.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function BannerCards() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className='mySwiper'
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
}

