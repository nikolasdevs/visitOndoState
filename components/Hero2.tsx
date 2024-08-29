"use client";

import React, { useState } from "react";
import { SwiperClass, Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import Img1 from "../public/idanreHill.png";
import Img2 from "../public/hotel.png";
import Img3 from "../public/Img4.jpg";
import Img4 from "../public/nature-1.jpg";
import Img5 from "../public/nature-2.jpg";
import Img6 from "../public/nature-5.jpg";
import Img7 from "../public/Img3.jpg";
import Img8 from "../public/nature-8.jpg";

export default function Hero() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const slides = [
    { id: 0, image: Img1, description: "Slide 1 description" },
    { id: 1, image: Img2, description: "Slide 2 description" },
    { id: 2, image: Img3, description: "Slide 3 description" },
    { id: 3, image: Img4, description: "Slide 4 description" },
    { id: 4, image: Img5, description: "Slide 5 description" },
    { id: 5, image: Img6, description: "Slide 6 description" },
    { id: 6, image: Img7, description: "Slide 7 description" },
    { id: 7, image: Img8, description: "Slide 8 description" },
  ];

  return (
    <div className="h-[90%] max-w-7xl m-auto">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-[1000px] h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-[600px] w-full">
            <Image
              src={slide.image}
              alt={`Slide ${slide.id}`}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              {slide.description}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="h-24 w-24">
            <Image
              src={slide.image}
              alt={`Thumbnail ${slide.id}`}
              layout="fill"
              objectFit="cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
