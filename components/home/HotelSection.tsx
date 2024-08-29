"use client";

import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../ArrowBtns";
import { slidesData } from "@/data/whereToStay/hotelData";
import Image, { StaticImageData } from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

type Slide = {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
};

const WhereToStay: React.FC<PropType> = ({ options }) => {
  const [slides, setSlides] = useState<Slide[]>(slidesData);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="w-full bg-white">
        <div className="container mt-20 bg-white py-10">
          <div className="w-1/2 mb-10">
            <h2 className="text-6xl font-black text-neutral-700 font-display leading-[4rem] ">
              Looking for where to stay in Ondo State?
            </h2>
          </div>
          <section className="">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {slidesData.map((slide, index) => (
                  <div className="embla__slide flex flex-col" key={index}>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="responsive"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                    <div className="flex flex-col gap-[.2rem]">
                      <p>{slide.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="embla__controls">
              <div className="embla__buttons">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                  aria-label="Previous slide"
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                  aria-label="Next slide"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WhereToStay;
