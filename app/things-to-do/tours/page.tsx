"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import React, { useRef } from "react";
import Map from "../../../public/ondoMap2.svg";
import IdanreHill1 from "../../../public/idanreHill.png";
import IdanreHill2 from "../../../public/idanreHill.png";
import CaveOfAshes from "../../../public/caveOfAshes3.jpeg";
import { Button } from "@/components/ui/button";
import MoreTours from "@/components/things-to-do/tours/MoreTours";

import { motion, useScroll } from "framer-motion";

const Destinations = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <div className="py-40 bg-primary-foreground">
        
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <div className="flex w-full items-center justify-center gap-8 lg:gap-0">
          <div className="w-1/2 ">
            <Image src={Map} alt="Map" className="w-full " />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <div className=" flex flex-col   gap-4 w-3/4">
              <p className="text-lg lg:text-8xl font-black font-display">
                TOURISM IN ONDO STATE
              </p>
              <p className=" text-xl">
                Explore the regions and towns around Ondo State and dig deeper
                into the experiences in each destination.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex items-center mt-32 py-20 ">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={IdanreHill1}
                alt="Idanre Hill"
                className="w-3/4 clip-idanreHill "
              />
            </div>
            <div className="w-1/2 flex items-center justify-center  ">
              <div className="flex flex-col gap-10 w-3/4 justify-end">
                <div className=" flex flex-col gap-4 ">
                  <p className=" lg:text-4xl font-black font-display  ">
                    Idanre Hill
                  </p>
                  <p className=" ">
                    Explore the regions and towns around Ondo State and dig
                    deeper into the experiences in each destination.
                  </p>
                </div>
                <div>
                  <Button className="px-12 font-semibold tracking-wider">
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center py-20 ">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={IdanreHill2}
                alt="Idanre Hill"
                className="w-3/4 clip-AkokoSE bg-red-500 border-4"
              />
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <div className="flex flex-col gap-10 w-3/4 justify-end">
                <div className=" flex flex-col gap-4 ">
                  <p className=" lg:text-4xl font-black font-display  ">
                    Ebomi Lake
                  </p>
                  <p className=" ">
                    The lake is located at Ipesi in Akoko South-East and it is
                    about 115km from Akure – the state capital. The lake which
                    is 1.6km long and 40m wide, has fascinating historical
                    antecedent according to the locals. The word “Ebomi” is an
                    adulteration of a Yoruba word “Abami”.
                  </p>
                </div>
                <div>
                  <Button className="px-12 font-semibold tracking-wider">
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center py-20 ">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={IdanreHill2}
                alt="Idanre Hill"
                className="w-3/4 clip-Ileoluji"
              />
            </div>
            <div className="w-1/2 flex items-center justify-center  ">
              <div className="flex flex-col gap-10 w-3/4 justify-end">
                <div className=" flex flex-col gap-4 ">
                  <p className=" lg:text-4xl font-black font-display  ">
                    Igbo Olodumare
                  </p>
                  <p className=" ">
                    Explore the regions and towns around Ondo State and dig
                    deeper into the experiences in each destination.
                  </p>
                </div>
                <div>
                  <Button className="px-12 font-semibold tracking-wider">
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center py-20  ">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={CaveOfAshes}
                alt="Idanre Hill"
                className="w-3/4 clip-ifedore"
              />
            </div>
            <div className="w-1/2 flex items-center justify-center  ">
              <div className="flex flex-col gap-10 w-3/4 justify-end">
                <div className=" flex flex-col gap-4 ">
                  <p className=" lg:text-4xl font-black font-display  ">
                    The Cave of Ashes
                  </p>
                  <p className=" ">
                    Explore the regions and towns around Ondo State and dig
                    deeper into the experiences in each destination.
                  </p>
                </div>
                <div>
                  <Button className="px-12 font-semibold tracking-wider">
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreTours />
      </div>
    </>
  );
};

export default Destinations;
