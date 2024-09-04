import Hero from "@/components/where-to-stay/hotels/Hero";
import HotelListSection from "@/components/where-to-stay/apartments/Apartments";
import React from "react";

const Hotels = () => {
  return (
    <div className="bg-primary-foreground">
      <Hero />
      <HotelListSection />
    </div>
  );
};

export default Hotels;
