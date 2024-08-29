import IdanreHill from "@/components/destinations/IdanreHill";
import MoreInfo from "@/components/home/MoreInfo";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 1;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Idanre_Hill = () => {
  return (
    <>
      <div className="h-screen container bg-primary-foreground">
        <IdanreHill />
        <MoreInfo slides={SLIDES} options={OPTIONS} />
      </div>
    </>
  );
};

export default Idanre_Hill;
