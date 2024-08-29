"use client";

import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../ArrowBtns";
import "../embla.css";
import Image, { StaticImageData } from "next/image";
import { slidesData } from "@/data/whereToStay/hotelData";

type Slide = {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
};

type PropType = {
  options?: EmblaOptionsType;
};

const MainInfo: React.FC<PropType> = ({ options }) => {
  const [filteredSlides, setFilteredSlides] = useState<Slide[]>(slidesData);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const filterSlidesByCategory = (categoryName: string) => {
    const filtered = slidesData.filter(
      (slide) => slide.category === categoryName
    );
    setFilteredSlides(filtered);
  };

  useEffect(() => {
    emblaApi?.reInit();
  }, [filteredSlides, emblaApi]);

  return (
    <div className="px-10 pb-10">
      <section className=" w-full">
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
        <div className="flex items-center w-full relative">
          <div className=" text-[32px] font-semibold flex flex-col  justify-between text-neutral-500 tracking-tighter  absolute top-0 bottom-0  w-[30rem] z-20 p-4">
            {" "}
            <div className="flex flex-col gap-4 ">
              <p className=" text-xl text-neutral-600 tracking-normal">
                What are you looking for?
              </p>
              <div className=" leading-9 pr-10">
                {[
                  "Accommodation",
                  "Food & Drinks",
                  "Nightlife",
                  "Events",
                  "Tour",
                  "Lounge",
                  "Culture",
                  "Shopping",
                ].map((category) => (
                  <span
                    key={category}
                    className="hover:text-neutral-600 cursor-pointer"
                    onClick={() => filterSlidesByCategory(category)}
                  >
                    {category},{" "}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-base text-primary tracking-normal">
              More about culture
            </p>
          </div>

          <div className="embla__viewport ml-96" ref={emblaRef}>
            <div className="embla__container">
              {filteredSlides.map((slide) => (
                <div className="embla__slide " key={slide.id}>
                  <div className="embla__slide__image">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      layout="responsive"
                      objectFit="cover"
                      className="w-full h-full"
                    />
                    <div className="flex flex-col gap-[.2rem]">
                      <p>{slide.title}</p>
                      <p>{slide.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainInfo;
