import HotelListSection from "@/components/where-to-stay/hotels/Hotels";
import HotelsHero from "@/components/where-to-stay/hotels/HotelsHero";
import React from "react";

const Hotels = () => {
  return (
    <div className="bg-primary-foreground">
      <HotelsHero />
      <HotelListSection />
    </div>
  );
};

export default Hotels;
