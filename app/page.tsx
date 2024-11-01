import { Header } from '@/components/Header';
import Hero from '@/components/home/Hero';
import MoreInfo from '@/components/home/MoreInfo';
import HotelSection from '@/components/home/HotelSection';
import EventSection from '@/components/home/EventSection';

export default function Home() {
  return (
    <>
      <div className="bg-primary-foreground ">
        <Hero />
        <div className="">
          <MoreInfo slides={[]} options={undefined} />
        </div>
        <div className="">
          <HotelSection slides={[]} />
          <EventSection />
        </div>
      </div>
    </>
  );
}
