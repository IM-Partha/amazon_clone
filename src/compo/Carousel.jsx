import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/navigation"
import { Navigation,Autoplay } from 'swiper/modules'
const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
        <Swiper loop={true} spaceBetween={0} modules={[Navigation,Autoplay]} autoplay={{delay:4500}} navigation={true} className='h-[50%]'>
            <SwiperSlide>
                <img src={"../images/Carousel_1.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/Carousel_2.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/Carousel_3.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/Carousel_4.jpg"} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={"../images/Carousel_5.jpg"} />
            </SwiperSlide>

            <SwiperSlide className='bg-black'>
                <video controls muted="muted">
                    <source src={"../images/Carousel_vid.mp4"} type="video/mp4" />
                </video>
            </SwiperSlide>
        </Swiper>
        <div className='h-[50%] bg-gradient-to-b from-stone-900'/> 
        </div>
  )
}

export default Carousel