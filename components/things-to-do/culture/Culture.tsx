"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { cultureData } from "@/data/cultureData";
import { motion } from "framer-motion";

const MoreCulture = () => {
  return (
    <>
      <div className="flex flex-col gap-10 mt-24 max-w-7xl px-8 mx-auto">
        <div>
          <div className="text-primary-foreground font-black mb-4 bg-primary shadow-lg text-2xl  px-3 py-4 ">
            <p className=" "> Clubs</p>
          </div>
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {cultureData.map((card, index) => (
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
                    <h5 className="mb-2 text-neutral-700 font-bold text-2xl dark:text-white">
                      {card.title}
                    </h5>
                  </Link>

                  <p className="mb-3 text-base text-neutral-500 dark:text-gray-400">
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
          <div className=" py-5 my-10">
            <Link
              href="#"
              className="hover:underline text-primary font-medium text-sm  "
            >
              View all clubs
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-primary-foreground text-2xl bg-primary shadow-md px-3 py-4">
            <p> Lounges & Bars</p>
          </div>
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {cultureData.map((card, index) => (
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
          <div className=" py-5 my-5">
            <Link href="#" className="hover:underline text-primary">
              View all lounges and bars
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreCulture;
