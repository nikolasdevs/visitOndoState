import Image from "next/image";
import React from "react";
import eventCenter from "@/public/dome.jpg";
import { latestEvents } from "@/data/latestEvents";

const EventSection = () => {
  return (
    <div className="w-full py-20 ">
      <div className="max-w-7xl px-10 mx-auto overflow-clip flex flex-col gap-10 ">
        <div className="w-4/6 flex flex-col gap-4 z-[90] ">
          <h1 className=" text-4xl font-bold text-neutral-600">
            Upcoming events in Ondo State
          </h1>{" "}
        </div>
        <div className="bg-green-300 w-full h-80 flex ">
          {latestEvents.map((eventData) => (
            <div key={eventData.id}>
              <Image
                src={eventData.imageUrl}
                alt="Event Center"
                className="w-9/12 h-full object-cover  "
              />{" "}
              <div>
                <p>{eventData.title}</p>
                <p>{eventData.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSection;
