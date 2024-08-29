"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "../public/ondoStateLogo2.png";
import hotel from "../public/hotel.png";
import map from "../public/ondoMap.svg";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
const whereToStay: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function Header() {
  const [isActive, setIsActive] = React.useState(false);

  const handleTriggerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="w-full  left-0 right-0 mx-auto bg-primary h-20 flex fixed top-5 z-50">
        <div className="bg-primary-foreground flex items-center justify-between w-full z-50 container text-primary">
          <Link href="/">
            <Image src={logo} alt="company logo" width={64} />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-xl font-semibold text-background-foreground">
                  <Link href="/things-to-do">Things To Do</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex items-start justify-between w-full pt-32 pb-10">
                  <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-full font-bold text-4xl ">
                    <Link href="/things-to-do/tours">
                      <li className="text-green-600 hover:text-green-400 tracking-tight">
                        Tourism
                      </li>
                    </Link>{" "}
                    <Link href="/things-to-do/sightseeing">
                      <li className="text-sky-600 hover:text-sky-400 tracking-tight">
                        Sightseeing
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className=" hover:text-orange-400">Events</li>
                    </Link>
                    <Link href="/">
                      <li className="text-pink-600 hover:text-pink-400 tracking-tight">
                        Food & Drinks
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className="text-teal-600 hover:text-teal-400 tracking-tight">
                        Shopping
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className="text-indigo-600 hover:text-indigo-400 tracking-tight">
                        Nighlife
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className="text-indigo-600 hover:text-indigo-400 tracking-tight">
                        Recreation
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className="text-amber-600 hover:text-amber-400 tracking-tight">
                        Culture
                      </li>
                    </Link>{" "}
                  </ul>
                  <div className=" flex flex-col gap-2 ">
                    <Image src={hotel} alt="Hotel Image" width={360} />
                    <p className="text-sm leading-tight text-neutral-500">
                      Beautifully designed hotels in Akure for your delight.
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-xl font-semibold text-background-foreground">
                  <Link href="/destinations"> Destinations</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex items-start justify-between w-full pt-32 pb-10">
                  <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-full font-bold text-4xl ">
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hotel
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Motel
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Apartment
                      </li>
                    </Link>
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hostel
                      </li>
                    </Link>{" "}
                  </ul>
                  <div className=" flex flex-col gap-2 ">
                    <Image src={hotel} alt="Hotel Image" width={360} />
                    <p className="text-sm leading-tight text-neutral-500">
                      Beautifully designed hotels in Akure for your delight.
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-xl font-semibold text-background-foreground">
                  <Link href="/where-to-stay"> Where To Stay</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex items-start justify-between w-full pt-32 pb-10">
                  <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-full font-bold text-4xl ">
                    <Link href="/where-to-stay/hotels">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hotel
                      </li>
                    </Link>{" "}
                    <Link href="/where-to-stay/motels">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Motel
                      </li>
                    </Link>{" "}
                    <Link href="/where-to-stay/apartment">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Apartment
                      </li>
                    </Link>
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hostel
                      </li>
                    </Link>{" "}
                  </ul>
                  <div className=" flex flex-col gap-2 ">
                    <Image src={hotel} alt="Hotel Image" width={360} />
                    <p className="text-sm leading-tight text-neutral-500">
                      Beautifully designed hotels in Akure for your delight.
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-xl font-semibold text-background-foreground">
                  About Ondo State
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex items-start justify-between w-full pt-32 pb-10">
                  <ul className="flex flex-col w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-full font-bold text-4xl ">
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hotel
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Motel
                      </li>
                    </Link>{" "}
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Apartment
                      </li>
                    </Link>
                    <Link href="/">
                      <li className=" hover:text-orange-400 tracking-tight">
                        Hostel
                      </li>
                    </Link>{" "}
                  </ul>
                  <div className=" flex flex-col gap-2 border border-neutral-200 p-4">
                    <Image src={map} alt="Ondo State Map" width={200} />
                    <p className="text-sm leading-tight text-neutral-500"></p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
