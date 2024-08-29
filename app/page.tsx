import { Header } from "@/components/Header";
import Hero from "@/components/home/Hero";
import MoreInfo from "@/components/home/MoreInfo";
import HotelSection from "@/components/home/HotelSection";

export default function Home() {
  return (
    <>
      <div className="bg-primary-foreground ">
        <Hero />
        <div className="">
          <MoreInfo />
        </div>
        <div className="">
          <HotelSection slides={[]} />
        </div>
        <div className="">
          <MoreInfo />
        </div>
      </div>
    </>
  );
}
