import React from "react";
import map from "../../public/ondoMap2.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <>
      <div className=" px-10 relative pt-28 h-screen w-full bg-gradient-to-b from-[#FEF2EC] via-5% to-[#fbceb7] to-95% ">
        <div className="absolute top-10 bottom-10 right-0 w-4/6 flex justify-end">
          <Image src={map} className=" w-[100%] " alt="Map" />{" "}
        </div>
        <div className=" text-neutral-600 h-[80%] flex flex-col justify-between py-10 w-full">
          <div className="flex flex-col gap-8 w-full">
            <p className="2xl:text-[10rem] xl:text-[8rem] md:text-[6rem]  w-72 2xl:leading-[9rem] xl:leading-[7rem] md:leading-[6rem] font-black font-display z-10">
              EXPLORE ONDO STATE
            </p>{" "}
            <p className=" text-2xl w-[40rem] leading-[2.5rem] font-semibold z-10">
              Get ready to explore Ondo State. <br /> Discover the best sights,
              events, entertainments, culture with few clicks away...
            </p>
          </div>
          <div className="mt-8 w-full">
            {" "}
            <Button className="px-6 font-semibold text-lg">
              DISCOVER
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
