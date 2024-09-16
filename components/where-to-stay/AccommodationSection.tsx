"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { apartmentListData, hotelListData } from "@/data/accommodationData";
import { motion } from "framer-motion";

const AccommodationSection = () => {
  const [randomHotels, setRandomHotels] = useState<any[]>([]);
  const [randomMotels, setRandomMotels] = useState<any[]>([]);
  const [randomApartments, setRandomApartments] = useState<any[]>([]);

  useEffect(() => {
    const shuffledHotels = [...hotelListData].sort(() => 0.5 - Math.random());
    const selectedHotels = shuffledHotels.slice(0, 4);
    setRandomHotels(selectedHotels);
  }, []);

  useEffect(() => {
    const shuffledMotels = [...hotelListData].sort(() => 0.5 - Math.random());
    const selectedMotels = shuffledMotels.slice(0, 4);
    setRandomHotels(selectedMotels);
  }, []);

  useEffect(() => {
    const shuffledApartments = [...apartmentListData].sort(
      () => 0.5 - Math.random()
    );
    const selectedApartments = shuffledApartments.slice(0, 4);
    setRandomApartments(selectedApartments);
  }, []);

  return (
    <>
      <div className="flex flex-col container py-20 gap-8 w-full">
        <div className="flex flex-col gap-8  w-full">
          <div className="text-primary-foreground font-semibold text-2xl bg-primary px-3 pe-6 py-4 flex justify-between items-center">
            <p> Hotels</p>
            <Link
              href="/where-to-stay/hotels"
              className="inline-flex items-center text-base font-medium text-center text-primary-foreground border-b-2 border-b-transparent hover:border-b-2 hover:border-b-primary-foreground"
            >
              More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {randomHotels.map((card, index) => (
              <div
                key={card.id}
                className="max-w-sm  rounded-lg  dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href={card.link}>
                  {" "}
                  <motion.div
                    initial={false}
                    whileHover={{ scale: 1 }} // Slightly zooms in the entire div
                    className="overflow-hidden " // Ensures the image remains within bounds
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{}}
                      className=""
                      whileHover={{ scale: [null, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image className="" src={card.imageUrl} alt="" />{" "}
                    </motion.div>
                  </motion.div>
                </Link>{" "}
                <div className="pt-5 h-48 flex flex-col justify-between ">
                  <Link href={card.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 dark:text-white">
                      {card.title}
                    </h5>
                  </Link>

                  <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">
                    {card.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-center text-primary"
                  >
                    More
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8  w-full">
          <div className="text-primary-foreground font-semibold text-2xl bg-primary px-3 pe-6 py-4 flex justify-between items-center">
            <p> Apartments</p>
            <Link
              href="/where-to-stay/apartments"
              className="inline-flex items-center text-base font-medium text-center text-primary-foreground border-b-2 border-b-transparent hover:border-b-2 hover:border-b-primary-foreground"
            >
              More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {randomApartments.map((card, index) => (
              <div
                key={card.id}
                className="max-w-sm  rounded-lg  dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href={card.link}>
                  {" "}
                  <motion.div
                    initial={false}
                    whileHover={{ scale: 1 }} // Slightly zooms in the entire div
                    className="overflow-hidden " // Ensures the image remains within bounds
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{}}
                      className=""
                      whileHover={{ scale: [null, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image className="" src={card.imageUrl} alt="" />{" "}
                    </motion.div>
                  </motion.div>
                </Link>{" "}
                <div className="pt-5 h-48 flex flex-col justify-between ">
                  <Link href={card.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 dark:text-white">
                      {card.title}
                    </h5>
                  </Link>

                  <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">
                    {card.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-center text-primary"
                  >
                    More
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8  w-full">
          <div className="text-primary-foreground font-semibold text-2xl bg-primary px-3 pe-6 py-4 flex justify-between items-center">
            <p>Motels</p>
            <Link
              href="#"
              className="inline-flex items-center text-base font-medium text-center text-primary-foreground border-b-2 border-b-transparent hover:border-b-2 hover:border-b-primary-foreground"
            >
              More
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {randomHotels.map((card, index) => (
              <div
                key={card.id}
                className="max-w-sm  rounded-lg  dark:bg-gray-800 dark:border-gray-700"
              >
                <Link href={card.link}>
                  {" "}
                  <motion.div
                    initial={false}
                    whileHover={{ scale: 1 }} // Slightly zooms in the entire div
                    className="overflow-hidden " // Ensures the image remains within bounds
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={false}
                      animate={{}}
                      className=""
                      whileHover={{ scale: [null, 1.1] }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image className="" src={card.imageUrl} alt="" />{" "}
                    </motion.div>
                  </motion.div>
                </Link>{" "}
                <div className="pt-5 h-48 flex flex-col justify-between ">
                  <Link href={card.link}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 dark:text-white">
                      {card.title}
                    </h5>
                  </Link>

                  <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">
                    {card.description}
                  </p>

                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-center text-primary"
                  >
                    More
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccommodationSection;
