"use client";

import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../embla/ArrowBtns";
import { hotelListData } from "@/data/accommodationData";
import Image, { StaticImageData } from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const WhereToStay: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <>
      <div className="w-full mt-20">
        <div className="max-w-7xl px-10 mx-auto flex flex-col items-start justify-center">
          <div className=" mb-10">
            <h2 className="font-bold text-4xl text-neutral-500">
              Our top pick hotels in Ondo State?
            </h2>
          </div>
          <div className=" w-11/12">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {hotelListData.map((slide, index) => (
                  <div className="embla__slide flex flex-col" key={index}>
                    <Image
                      src={slide.imageUrl}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default WhereToStay;
