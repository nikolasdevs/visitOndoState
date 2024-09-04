"use client";

import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "../ArrowBtns";
import "../embla.css";
import Image, { StaticImageData } from "next/image";
import { hotelListData } from "@/data/whereToStay/hotelListData";

type HotelListData = {
  id: number;
  imageUrl: StaticImageData;
  title: string;
  category: string;
};

type PropType = {
  options?: EmblaOptionsType;
};

const MainInfo: React.FC<PropType> = ({ options }) => {
  const [filteredSlides, setFilteredSlides] =
    useState<HotelListData[]>(hotelListData);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const filterSlidesByCategory = (categoryName: string) => {
    const filtered = hotelListData.filter(
      (slide) => slide.category === categoryName
    );
    setFilteredSlides(filtered);
  };

  useEffect(() => {
    emblaApi?.reInit();
  }, [filteredSlides, emblaApi]);

  return (
    <div className="md:mt-20 mt-10">
      <section className="max-w-7xl mx-auto flex flex-col ">
        <div className="flex flex-col md:flex-row w-full relative gap-6 ">
          <div className="  font-semibold flex flex-col  text-neutral-500 md:w-4/12 w-full bg-primary-foreground  z-20 p-4">
            {" "}
            <div className="flex flex-col gap-4 ">
              <p className=" text-xl text-neutral-600 tracking-normal">
                What are you looking for?
              </p>
              <div className="sm:text-[32px] text-[1.5rem] sm:leading-9 leading-6 tracking-tighter">
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
            <p className="text-base text-primary tracking-normal mt-10">
              More about {filteredSlides[0]?.category}
            </p>
          </div>

          <div className="embla__viewport w-11/12 mx-auto" ref={emblaRef}>
            <div className="embla__container">
              {filteredSlides.map((slide) => (
                <div className="embla__slide flex " key={slide.id}>
                  <div className="embla__slide__image">
                    <Image
                      src={slide.imageUrl}
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
            <div className="embla__controls ">
              <div className="embla__buttons w-full md:justify-end justify-between flex">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainInfo;
