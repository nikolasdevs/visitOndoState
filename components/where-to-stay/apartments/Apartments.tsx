"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  apartmentListData,
} from "@/data/whereToStay/hotelListData";
import { motion } from "framer-motion";
import PaginationSection from "@/components/Pagination";

const ApartmentsListSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = apartmentListData.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <div className="flex flex-col container py-20 gap-8 w-full">
        <div className="flex flex-col gap-8  w-full">
          <div className="  grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {currentItems.map((card, index) => (
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
          <PaginationSection
            totalItems={apartmentListData.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default ApartmentsListSection;
