import React from 'react';
import './Carousel.css';

import img1 from '../../assets/images/alex-perez-NLUkAA-nDdE-unsplash.jpg';
import img2 from '../../assets/images/aaron-burden-cEukkv42O40-unsplash.jpg';
import img3 from '../../assets/images/ameenfahmy-3V8gdLbwDOI-unsplash.jpg';
import img4 from '../../assets/images/derek-thomson-TWoL-QCZubY-unsplash.jpg';
import img5 from '../../assets/images/rachel-cook-mOcdke2ZQoE-unsplash.jpg';
import img6 from '../../assets/images/sebastien-jermer-n7DY58YFg9E-unsplash.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Carousel = () => {
    return (
        <section className='container pt-12 px-24'>
            <h3 className='uppercase font-semibold text-center text-lg py-3'>Photos</h3>
            <Swiper
                spaceBetween={0}
                slidesPerView={5}
                onSlideChange={(e) => {
                    // console.log(e)
                }}
                  onSwiper={(e) => {

                }}
                modules={[Navigation, Pagination, EffectCoverflow]}
                pagination = {{type: 'fraction' }}
                navigation
                loop = {true}
                centeredSlides ={true}
                effect={'coverflow'}
                coverflowEffect={{
                    rotate: 10
                  }}
            >
                <SwiperSlide><img src={img1} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="img" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="img" /></SwiperSlide>
                
             </Swiper>
        </section>
    );
};

export default Carousel;