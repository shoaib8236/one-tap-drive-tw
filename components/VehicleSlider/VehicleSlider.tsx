'use client'



import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import VehicleCard from '../VehicleCard/VehicleCard';
// import 'swiper/css';
import { useEffect, useState } from 'react';




const VehicleSlider = () => {

  const [isDomReady, setIsDomReady] = useState(false)

  const swiper = useSwiper();



  const swiperProps = {
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },



  }

  useEffect(() => {

    if (typeof window !== 'undefined') {
      setIsDomReady(true)
    }

  }, [])

  if (!isDomReady) return <>
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
      <VehicleCard />
    </div>
    </>

  return (
    <div>
      <Swiper
        {...swiperProps}
      >
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
        <SwiperSlide>
          <VehicleCard />
        </SwiperSlide>
      </Swiper>



    </div>

  )
}

export default VehicleSlider