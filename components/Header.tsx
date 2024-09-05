"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "@/public/ondoStateLogo2.png";
import hotel from "@/public/hotel.png";
import { ArrowLeft, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSubMenuOpen(null);
  };

  const handleBack = () => {
    setSubMenuOpen(null);
  };

  const openSubMenu = (menu: string) => {
    setSubMenuOpen(menu);
  };

  // Close mobile menu on window resize if screen is larger than 'lg'
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // 'lg' breakpoint in Tailwind is 1024px
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-[9999] bg-primary-foreground">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="Company Logo" width={64} height={64} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Things To Do */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-semibold hover:text-accent transition">
                  Things To Do
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-8 bg-primary-foreground shadow-lg max-w-7xl m-auto">
                  <div className="flex justify-between ">
                    <ul className="flex flex-col gap-2 text-4xl font-bold">
                      <li>
                        <Link
                          href="/things-to-do/tours"
                          className="text-green-600 hover:text-green-400 transition"
                        >
                          Tourism
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="text-sky-600 hover:text-sky-400 transition"
                        >
                          Sightseeing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/things-to-do/events"
                          className="text-orange-600 hover:text-orange-400 transition"
                        >
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/food-drinks"
                          className="text-pink-600 hover:text-pink-400 transition"
                        >
                          Food & Drinks
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/shopping"
                          className="text-teal-600 hover:text-teal-400 transition"
                        >
                          Shopping
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/nightlife"
                          className="text-indigo-600 hover:text-indigo-400 transition"
                        >
                          Nightlife
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/recreation"
                          className="text-indigo-600 hover:text-indigo-400 transition"
                        >
                          Recreation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/culture"
                          className="text-amber-600 hover:text-amber-400 transition"
                        >
                          Culture
                        </Link>
                      </li>
                    </ul>
                    {/* Image and Description */}
                    <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center">
                      <Image
                        src={hotel}
                        alt="Hotel Image"
                        width={360}
                        height={240}
                        className=""
                      />
                      <p className="mt-2 text-sm text-neutral-500 text-center">
                        Beautifully designed hotels in Akure for your delight.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Destinations */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-semibold hover:text-accent transition">
                  Destinations
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-8 bg-primary-foreground  shadow-lg max-w-7xl m-auto">
                  <div className="flex justify-between ">
                    <ul className="flex flex-col gap-2 lg:w-1/2 text-4xl font-bold text-neutral-500">
                      <li>
                        <Link
                          href="/destinations/hotel"
                          className="hover:text-accent transition"
                        >
                          Hotel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/destinations/motel"
                          className="hover:text-accent transition"
                        >
                          Motel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/destinations/apartment"
                          className="hover:text-accent transition"
                        >
                          Apartment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/destinations/hostel"
                          className="hover:text-accent transition"
                        >
                          Hostel
                        </Link>
                      </li>
                    </ul>
                    {/* Image and Description */}
                    <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center">
                      <Image
                        src={hotel}
                        alt="Hotel Image"
                        width={360}
                        height={240}
                        className=""
                      />
                      <p className="mt-2 text-sm text-neutral-500 text-center">
                        Beautifully designed hotels in Akure for your delight.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Where To Stay */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-semibold hover:text-accent transition">
                  Where To Stay
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-8 bg-primary-foreground shadow-lg max-w-7xl m-auto">
                  <div className="flex justify-between ">
                    <ul className="flex flex-col gap-2 lg:w-1/2 text-4xl font-bold text-neutral-500">
                      <li>
                        <Link
                          href="/where-to-stay/hotels"
                          className="hover:text-accent transition"
                        >
                          Hotel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/where-to-stay/motels"
                          className="hover:text-accent transition"
                        >
                          Motel
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/where-to-stay/apartments"
                          className="hover:text-accent transition"
                        >
                          Apartment
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/where-to-stay/hostel"
                          className="hover:text-accent transition"
                        >
                          Hostel
                        </Link>
                      </li>
                    </ul>
                    {/* Image and Description */}
                    <div className="mt-4 lg:mt-0 lg:ml-8 flex flex-col items-center">
                      <Image
                        src={hotel}
                        alt="Hotel Image"
                        width={360}
                        height={240}
                        className=""
                      />
                      <p className="mt-2 text-sm text-neutral-500 text-center">
                        Beautifully designed hotels in Akure for your delight.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Follow Us */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-xl font-semibold hover:text-accent transition">
                  Follow Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-8 bg-primary-foreground shadow-lg text-4xl font-bold text-neutral-500 max-w-7xl m-auto">
                  <div className="flex flex-col">
                    <span className="font-semibold text-xl mb-4">
                      Follow us
                    </span>
                    <ul className="flex justify-between text-neutral-500">
                      <li className="flex flex-col">
                        <Link
                          href="https://instagram.com"
                          passHref
                          className="hover:text-accent transition flex flex-col"
                        >
                          Instagram
                          <span className="text-base ">11k</span>
                        </Link>
                      </li>
                      <li className="flex flex-col">
                        <Link
                          href="https://facebook.com"
                          passHref
                          className="hover:text-accent transition flex flex-col"
                        >
                          Facebook
                          <span className="text-base ">232k</span>
                        </Link>
                      </li>
                      <li className="flex flex-col">
                        <Link
                          href="https://twitter.com"
                          passHref
                          className="hover:text-accent transition flex flex-col"
                        >
                          Twitter
                          <span className="text-base ">9k</span>
                        </Link>
                      </li>
                      <li className="flex flex-col">
                        <Link
                          href="/#"
                          passHref
                          className="hover:text-accent transition flex flex-col"
                        >
                          #VisitOndoState
                          <span className="text-base ">
                            and share the best moments
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden z-[2000]">
          <Button onClick={toggleMenu} className="text-primary-foreground">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav className="lg:hidden bg-primary-foreground/50  absolute inset-0 h-screen ">
          <div className=" max-w-7xl h-screen flex justify-end  ">
            <div className="flex flex-col space-y-4 p-6 mt-16 items-end bg-primary-foreground shadow-md w-1/2 h-full">
              {subMenuOpen === null ? (
                <>
                  <ul className="w-full flex flex-col gap-3">
                    <li
                      className="text-2xl font-semibold  transition flex items-center justify-between"
                      onClick={() => openSubMenu("thingsToDo")}
                    >
                      Things To Do
                      <ArrowRight />
                    </li>

                    <li
                      className="text-2xl font-semibold  transition flex items-center justify-between"
                      onClick={() => openSubMenu("destinations")}
                    >
                      Destinations
                      <ArrowRight />
                    </li>

                    <li
                      className="text-2xl font-semibold  transition flex items-center justify-between"
                      onClick={() => openSubMenu("whereToStay")}
                    >
                      Where To Stay
                      <ArrowRight />
                    </li>

                    <li
                      className="text-2xl font-semibold  transition flex items-center justify-between"
                      onClick={() => openSubMenu("followUs")}
                    >
                      Follow Us
                      <ArrowRight />
                    </li>
                  </ul>
                </>
              ) : (
                <div className=" w-full flex gap-8">
                  <button
                    onClick={handleBack}
                    className="mb-4 flex items-center"
                  >
                    <ArrowLeft className="mr-2" />
                  </button>
                  {subMenuOpen === "thingsToDo" && (
                    <>
                      <div className="flex flex-col">
                        <p className="text-lg py-3 font-semibold text-neutral-500">
                          Things to Do
                        </p>
                        <ul className="flex flex-col gap-1 text-2xl font-semibold border-y py-3 ">
                          <li>
                            <Link
                              href="/things-to-do/tours"
                              className="text-green-600 hover:text-green-400 transition"
                            >
                              Tourism
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/things-to-do/sightseeing"
                              className="text-sky-600 hover:text-sky-400 transition"
                            >
                              Sightseeing
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/events"
                              className="text-orange-600 hover:text-orange-400 transition"
                            >
                              Events
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/food-drinks"
                              className="text-pink-600 hover:text-pink-400 transition"
                            >
                              Food & Drinks
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/shopping"
                              className="text-teal-600 hover:text-teal-400 transition"
                            >
                              Shopping
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/nightlife"
                              className="text-indigo-600 hover:text-indigo-400 transition"
                            >
                              Nightlife
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/recreation"
                              className="text-indigo-600 hover:text-indigo-400 transition"
                            >
                              Recreation
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/culture"
                              className="text-amber-600 hover:text-amber-400 transition"
                            >
                              Culture
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                  {subMenuOpen === "destinations" && (
                    <div className="flex flex-col">
                      <p className="text-lg py-3 font-semibold text-neutral-500">
                        Destinations
                      </p>
                      <ul className="flex flex-col gap-1 text-2xl font-semibold border-y py-3">
                        <li>
                          <Link
                            href="/destinations/hotel"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Hotel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/destinations/motel"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Motel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/destinations/apartment"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Apartment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/destinations/hostel"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Hostel
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  {subMenuOpen === "whereToStay" && (
                    <div className="flex flex-col">
                      <p className="text-lg py-3 font-semibold text-neutral-500">
                        Where to Stay
                      </p>
                      <ul className="flex flex-col gap-1 text-2xl font-semibold border-y py-3">
                        <li>
                          <Link
                            href="/where-to-stay/hotels"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Hotel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/where-to-stay/motels"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Motel
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/where-to-stay/apartments"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Apartment
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/where-to-stay/hostel"
                            className="hover:text-accent transition"
                            onClick={toggleMenu}
                          >
                            Hostel
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}

                  {subMenuOpen === "followUs" && (
                    <div className="flex flex-col">
                      <p className="text-lg py-3 font-semibold text-neutral-500">
                        #
                      </p>
                      <ul className="flex flex-col gap-2 text-2xl font-semibold border-y py-6">
                        <p className="text-lg">Follow us</p>
                        <li>
                          <Link
                            href="https://instagram.com"
                            className="hover:text-accent transition flex flex-col text-3xl font-bold"
                            onClick={toggleMenu}
                          >
                            Instagram{" "}
                            <span className="text-sm text-neutral-500">
                              11k
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://facebook.com"
                            className="hover:text-accent transition flex flex-col text-3xl font-bold"
                            onClick={toggleMenu}
                          >
                            Facebook{" "}
                            <span className="text-sm text-neutral-500">
                              232k
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://twitter.com"
                            className="hover:text-accent transition flex flex-col text-3xl font-bold"
                            onClick={toggleMenu}
                          >
                            Twitter{" "}
                            <span className="text-sm text-neutral-500">9k</span>
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            href="/#"
                            className="hover:text-accent transition flex flex-col text-3xl font-bold"
                            onClick={toggleMenu}
                          >
                            #VisitOndoState{" "}
                            <span className="text-sm text-neutral-500">
                              and share the best moments
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
