"use client";
import React, { useRef } from "react";
import MoreShopping from "@/components/things-to-do/shopping/Shopping";

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

        <div className="flex gap-8 lg:gap-0 relative h-screen bg-[url('/mall2.jpg')] bg-no-repeat bg-cover">
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-35"></div>
          <div className=" flex items-start justify-start z-50 max-w-7xl m-auto">
            <div className=" flex flex-col w-3/4 px-8 gap-4 ">
              <p className="text-2xl lg:text-6xl  text-white font-extrabold">
                Shopping in Ondo State
              </p>
              <p className="  text-white lg:text-4xl text-xl font-semibold ">
                Ondo State offers the best place for your shopping from malls to
                the local markets.
              </p>
            </div>
          </div>
        </div>

        <MoreShopping />
      </div>
    </>
  );
};

export default Events;
