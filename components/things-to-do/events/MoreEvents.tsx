"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { eventData } from "@/data/eventData";
import { motion } from "framer-motion";

type Months =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

const months: Months[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const MoreEvents = () => {
  const [selectedMonth, setSelectedMonth] = useState<Months>("March");

  const monthRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const monthsContainerRef = useRef<HTMLDivElement | null>(null);

  const handleMonthClick = (month: Months) => {
    setSelectedMonth(month);

    const monthSection = monthRefs.current[month];
    const monthsContainer = monthsContainerRef.current;

    if (monthSection && monthsContainer) {
      const sectionTop =
        monthSection.getBoundingClientRect().top + window.pageYOffset;
      const stickyOffset = monthsContainer.offsetHeight;

      window.scrollTo({
        top: sectionTop - stickyOffset - 130,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col py-20 gap-10 max-w-7xl m-auto px-10">
        <div
          className="flex gap-6 text-xl font-semibold bg-primary-foreground sticky top-20  z-50"
          ref={monthsContainerRef}
        >
          <div className="h-[2px] w-full bg-primary absolute bottom-0"></div>

          {months.map((month) => (
            <button
              key={month}
              className={`months-container ${
                selectedMonth === month ? "text-accent " : ""
              }`}
              onClick={() => handleMonthClick(month)}
            >
              {month}
            </button>
          ))}
        </div>

        <div className="  flex flex-col gap-24  m-auto">
          {months.map((month) => (
            <div
              key={month}
              className="flex flex-col gap-8"
              ref={(el) => {
                monthRefs.current[month] = el;
              }} // Assign the ref
            >
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                {month}
              </h2>
              <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
                {eventData[month] && eventData[month].length > 0 ? (
                  eventData[month].map((card) => (
                    <div key={card.id} className="max-w-sm">
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
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-neutral-700 dark:text-white">
                          {card.title}
                        </h5>
                        <h5 className="mb-2 text-lg font-bold tracking-tight text-neutral-500 dark:text-white">
                          {card.date}
                        </h5>

                        <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">
                          {card.description}
                        </p>

                        <div className="inline-flex items-center text-sm font-medium text-center text-primary">
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
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-neutral-500">
                    No events available for {selectedMonth}.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MoreEvents;
