import React from 'react';
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCards, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { cn } from "../../lib/utils";

const Fullstack = () => {
  const images = [
    {
      src: "https://picsum.photos/400/600?random=1",
      alt: "Random Image 1",
    },
    {
      src: "https://picsum.photos/400/600?random=2",
      alt: "Random Image 2",
    },
    {
      src: "https://picsum.photos/400/600?random=3",
      alt: "Random Image 3",
    },
    {
      src: "https://picsum.photos/400/600?random=4",
      alt: "Random Image 4",
    },
    {
      src: "https://picsum.photos/400/600?random=5",
      alt: "Random Image 5",
    },
    {
      src: "https://picsum.photos/400/600?random=6",
      alt: "Random Image 6",
    },
    {
      src: "https://picsum.photos/400/600?random=7",
      alt: "Random Image 7",
    },
    {
      src: "https://picsum.photos/400/600?random=8",
      alt: "Random Image 8",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8 p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl font-bold mb-2">Full-stack Projects</h1>
        <p className="text-xl opacity-90">Build end-to-end web applications</p>
      </div>

      <div className="flex justify-center">
        <Carousel_002 className="" images={images} loop />
      </div>
    </div>
  );
};

const Carousel_002 = ({
  images,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 40,
}) => {
  const css = `
  .Carousal_002 {
    padding-bottom: 50px !important;
  }
  `;
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full max-w-3xl", className)}
    >
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={
          autoplay
            ? {
                delay: 1000,
                disableOnInteraction: false,
              }
            : false
        }
        effect="cards"
        grabCursor={true}
        loop={loop}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={
          showNavigation
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        className="Carousal_002 h-[380px] w-[260px]"
        modules={[EffectCards, Autoplay, Pagination, Navigation]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="rounded-3xl">
            <img
              className="h-full w-full object-cover"
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
        {showNavigation && (
          <div>
            <div className="swiper-button-next after:hidden">
              <ChevronRightIcon className="h-6 w-6 text-white" />
            </div>
            <div className="swiper-button-prev after:hidden">
              <ChevronLeftIcon className="h-6 w-6 text-white" />
            </div>
          </div>
        )}
      </Swiper>
    </motion.div>
  );
};

export default Fullstack;
