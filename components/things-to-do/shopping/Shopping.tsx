"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { shoppingData } from "@/data/shoppingData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const MoreShopping = () => {
  return (
    <>
      <div className=" mt-24 max-w-7xl px-8 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-primary-foreground font-semibold mb-4 bg-primary shadow-lg text-2xl  px-3 py-4 ">
            <p className=" ">Malls</p>
          </div>
          <div className="  grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {shoppingData.map((card, index) => (
              <div
                key={card.id}
                className="max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-[30rem]"
              >
                <Link href={card.link} className="">
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
                      <Image
                        className="w-full border"
                        src={card.imageUrl}
                        alt=""
                      />{" "}
                    </motion.div>
                  </motion.div>
                </Link>{" "}
                <div className="pt-3 flex flex-col justify-between  h-auto gap-2">
                  <div className="flex flex-col justify-between ">
                    <Link href={card.link}>
                      <h5 className="mb-2 text-neutral-700 font-bold text-xl dark:text-white">
                        {card.title}
                      </h5>
                    </Link>

                    <p className="mb-3 text-base text-neutral-500 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    More
                    <ArrowRight size={16} className="ml-2" />
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
              View all malls
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-primary-foreground font-semibold mb-4 bg-primary shadow-lg text-2xl  px-3 py-4 ">
            <p className=" "> Local Markets</p>
          </div>
          <div className="  grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {shoppingData.map((card, index) => (
              <div
                key={card.id}
                className="max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-[30rem]"
              >
                <Link href={card.link} className="">
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
                      <Image
                        className="w-full border"
                        src={card.imageUrl}
                        alt=""
                      />{" "}
                    </motion.div>
                  </motion.div>
                </Link>{" "}
                <div className="pt-3 flex flex-col justify-between  h-auto gap-2">
                  <div className="flex flex-col justify-between ">
                    <Link href={card.link}>
                      <h5 className="mb-2 text-neutral-700 font-bold text-xl dark:text-white">
                        {card.title}
                      </h5>
                    </Link>

                    <p className="mb-3 text-base text-neutral-500 dark:text-gray-400">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className=" py-5 my-10">
            <Link
              href="/things-to-do/shopping/all-markets"
              className="hover:underline text-primary font-medium text-sm  "
            >
              View all markets
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreShopping;
