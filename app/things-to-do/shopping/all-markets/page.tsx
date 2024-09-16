"use client";
import React from "react";
import AllMarkets from "@/components/things-to-do/shopping/AllMarkets";

import { motion, useScroll } from "framer-motion";

const Markets = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="py-0 bg-primary-foreground">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex gap-8 lg:gap-0 relative h-screen bg-[url('/market1.jpg')] bg-no-repeat bg-cover">
          <div className="absolute top-0 left-0 w-full h-screen bg-black bg-opacity-35"></div>
          <div className=" flex items-start justify-start z-50 max-w-7xl m-auto">
            <div className=" flex flex-col w-3/4 px-8 gap-4 ">
              <p className="text-2xl lg:text-6xl  text-white font-extrabold">
                Markets in Ondo State
              </p>
              <p className="  text-white lg:text-4xl text-xl font-semibold ">
                For every destination you visit, there is a local market for you
                to explore.
              </p>
            </div>
          </div>
        </div>

        <AllMarkets />
      </div>
    </>
  );
};

export default Markets;
