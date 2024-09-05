"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Map from "../../../public/ondoMap3.svg";
import MoreEvents from "@/components/things-to-do/events/MoreEvents";

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

        <div className="flex max-w-7xl m-auto items-center justify-start gap-8 lg:gap-0 relative h-screen  px-8">
          <div className="w-full absolute inset-0">
            <Image src={Map} alt="Map" className="w-1/2 " />
          </div>

          <div className="w-3/4 flex items-center justify-center z-50 ">
            <div className=" flex flex-col   gap-4 w-full">
              <p className="text-lg lg:text-8xl font-black font-display text-neutral-700">
                The Event Highlights in Ondo State
              </p>
              <p className=" text-xl text-neutral-600">
                A true celebration of our rich tradition through art, music,
                film, sport, or cultural celebrations: these top events are what
                make Ondo State so special.
              </p>
            </div>
          </div>
        </div>

        <div></div>
        <MoreEvents />
      </div>
    </>
  );
};

export default Events;
