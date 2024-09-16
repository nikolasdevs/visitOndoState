"use client";
import Image from "next/image";
import React, { useRef } from "react";
import MoreNightlife from "@/components/things-to-do/nightlife/Nightlife";

import { motion, useScroll } from "framer-motion";

const Events = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="py-0 bg-primary-foreground">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex gap-8 lg:gap-0 relative h-screen bg-[url('/nightLife.jpg')] bg-no-repeat bg-cover">
          <div className=" flex items-start justify-start z-50 max-w-7xl m-auto">
            <div className=" flex flex-col w-3/4 px-8 gap-4 ">
              <p className="text-lg lg:text-6xl  text-white font-extrabold">
                Nightlife in Ondo State: Parties, Lounges & Bars, Clubs...
              </p>
              <p className="  text-white lg:text-4xl text-xl font-semibold">
                Nightlife in the cities of Ondo state is renowned far and wide.
                It offers the a colorful choice of parties in the south western
                part of Nigeria.
              </p>
            </div>
          </div>
        </div>

        <MoreNightlife />
      </div>
    </>
  );
};

export default Events;
