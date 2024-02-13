"use client";

// creating a image gallery using swiper and next/image

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { use, useEffect, useState } from "react";
import { RiFullscreenExitLine } from "react-icons/ri";
import { RiFullscreenLine } from "react-icons/ri";

const NextImageGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDomReady, setIsDomReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDomReady(true);
    }
  }, []);

  const images = [
    "https://onetapdrive.com/public/images/1694779513_Mercedes_Benz_G63_AMG_Edition_2019-1%20(2)_small.webp",
    "https://onetapdrive.com/public/images/1694779512_Mercedes_Benz_G63_AMG_Edition_2019-3%20(2)_small.webp",
    "https://onetapdrive.com/public/images/1694779513_Mercedes_Benz_G63_AMG_Edition_2019-4%20(1)_small.webp",
    "https://onetapdrive.com/public/images/1694779513_Mercedes_Benz_G63_AMG_Edition_2019-5%20(1)_small.webp",
    "https://onetapdrive.com/public/images/1694779513_Mercedes_Benz_G63_AMG_Edition_2019-5%20(1)_small.webp",
    "https://onetapdrive.com/public/images/1694779513_Mercedes_Benz_G63_AMG_Edition_2019-5%20(1)_small.webp",
  ];

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const resnderFullScreenClass =
    "fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center flex-col bg-dark bg-opacity-90";

  return (
    <>

        <div className={`w-full ${isFullScreen ? resnderFullScreenClass : ""}`}>
          <div className="w-full max-w-[1024px] min-w-[300px] select-none">
            <div className="relative">
              <Swiper
                className="[&>.swiper-button-next]:text-light [&>.swiper-button-prev]:text-light"
                navigation
                pagination={{ type: "fraction" }}
                modules={[Navigation, Thumbs]}
                thumbs={{
                  swiper: thumbsSwiper,
                }}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      width={459}
                      height={271}
                      src={image}
                      alt="image"
                      className="block w-full h-full object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                onClick={handleFullScreen}
                className="mb-4 absolute top-2 right-2 z-50 text-2xl bg-dark bg-opacity-80 p-2 rounded-lg text-primary"
              >
                {isFullScreen ? <RiFullscreenExitLine /> : <RiFullscreenLine />}
              </button>
            </div>
            <Swiper
              className={`mt-4 `}
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
            >
              {images.map((image, index) => (
                <SwiperSlide
                  className="opacity-60 hover:opacity-100 duration-300 ease-in-out cursor-pointer [&.swiper-slide-thumb-active]:opacity-100"
                  key={index}
                >
                  <Image
                    width={459}
                    height={271}
                    src={image}
                    alt="image"
                    className="block w-full h-full object-cover rounded-lg cursor-pointer"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      
    </>
  );
};

export default NextImageGallery;
