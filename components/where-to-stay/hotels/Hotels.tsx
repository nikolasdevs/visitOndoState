"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { hotelListData } from "@/data/accommodationData";
import { motion } from "framer-motion";
import PaginationSection from "@/components/Pagination";
import ApartmentsListSection from "../apartments/Apartments";
import { ArrowRight } from "lucide-react";

const HotelListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = hotelListData.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto px-8 gap-8 w-full">
        <div className="flex flex-col gap-8  w-full">
          <div className="  grid gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center"> 
            {currentItems.map((card, index) => (
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
          <div className=" sticky bottom-0 bg-primary-foreground py-4 border-t-2 border-y-white">
            <PaginationSection
              totalItems={hotelListData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <ApartmentsListSection />
        </div>
      </div>
    </>
  );
};

export default HotelListSection;
