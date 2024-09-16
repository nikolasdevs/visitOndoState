"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { allMarketData } from "@/data/shoppingData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PaginationSection from "@/components/Pagination";

const AllMarkets = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = allMarketData.slice(firstItemIndex, lastItemIndex);
  return (
    <>
      <div className=" mt-24 max-w-7xl px-8 mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-primary-foreground font-semibold mb-4 bg-primary shadow-lg text-2xl  px-3 py-4 ">
            <p className=" ">All Markets</p>
          </div>
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
                    whileHover={{ scale: 1 }}
                    className="overflow-hidden "
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
        </div>
      </div>
      <div className="mt-10">
        <PaginationSection
          totalItems={allMarketData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default AllMarkets;
