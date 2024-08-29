import { Header } from "@/components/Header";
import Image from "next/image";
import React from "react";
import Map from "../../public/ondoMap2.svg";

const Destinations = () => {
  return (
    <>
      <div className="mt-40">
        <div className="flex items-center bg-primary-foreground py-10">
          <div className="w-1/2">
            {" "}
            <Image src={Map} alt="Map" className="w-full" />
          </div>

          <div className="w-1/2 flex items-center justify-center">
            <div className=" flex flex-col gap-4 w-1/2">
              <p className="text-lg lg:text-6xl font-black font-display ">
                DESTINATIONS IN ONDO STATE
              </p>
              <p className=" text-xl">
                Explore the regions and towns around Ondo State and dig deeper
                into the experiences in each destination.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="w-full flex items-center  mt-10">
            <div className="w-1/2 flex items-center justify-center ">
              <Image src={Map} alt="Map" className="w-1/3 object-cover" />
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <div className=" flex flex-col gap-4 w-1/2">
                <p className=" lg:text-4xl font-black font-display ">
                  Idanre Hill
                </p>
                <p className=" ">
                  Explore the regions and towns around Ondo State and dig deeper
                  into the experiences in each destination.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center  mt-10">
            <div className="w-1/2 flex items-center justify-center ">
              <div className=" flex flex-col gap-4 w-1/2">
                <p className=" lg:text-4xl font-black font-display ">
                  Idanre Hill
                </p>
                <p className=" ">
                  Explore the regions and towns around Ondo State and dig deeper
                  into the experiences in each destination.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex items-center justify-center ">
              <Image src={Map} alt="Map" className="w-1/3 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destinations;
