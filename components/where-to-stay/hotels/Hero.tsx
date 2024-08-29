"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import Hotel1 from "@/public/hotel.png";
import Image from "next/image";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="pt-40 ">
        <div className="w-full  container">
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <div className="w-4/6 mt-20 flex items-center ">
            <div className=" flex flex-col   gap-4  text-neutral-500">
              <p className="text-lg lg:text-7xl font-black font-display text-neutral-600">
                Hotels in Ondo State
              </p>
              <p className=" text-4xl font-bold w-6/6">
                Now that have you arrived – you need a beautiful place to rest.
                This is not a problem thanks to the hotels situated in Akure and
                the connecting towns
              </p>
            </div>
          </div>
          <div className="w-full mt-20">
            <Image
              src={Hotel1}
              alt="Hotel Image"
              className="object-cover w-full"
            />
          </div>
          <div className="w-full mt-20">
            <p className="w-9/12 ">
              Business travelers and vacationers can find a wide choice of
              excellent hotels in the close vicinity of Zurich Airport. They are
              located just a stone’s throw from the airport and can be quickly
              reached. Thanks to the proximity of the airport to central Zurich,
              the journey to the history-steeped city center and the region
              around Lake Zurich takes no time at all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
