import Image from "next/image";
import React from "react";
import eventCenter from "@/public/dome.jpg";

const EventSection = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-7xl px-10 mx-auto overflow-clip flex flex-col gap-10 ">
        <div className="w-4/6 flex flex-col gap-4 z-[90] ">
          <h1 className=" text-4xl font-bold text-neutral-600">
            Stay current on the latest events in Ondo State
          </h1>{" "}
          <p>
            Follow our social media pages to get the latest information, gist,
            and happenings around the state.{" "}
          </p>{" "}
        </div>
        <div className="bg-green-300 w-full h-80">
          {" "}
          <Image
            src={eventCenter}
            alt="Event Center"
            className="w-9/12 h-full object-cover  " // Makes the image fill the box and clip to the dimensions
          />{" "}
          
        </div>
      </div>
    </div>
  );
};

export default EventSection;
