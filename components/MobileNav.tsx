"use client";

import React from "react";
import { Sheet, SheetTitle, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Route } from "./Route";
import Image from "next/image";

const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTitle></SheetTitle>
      <SheetTrigger className="flex justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-24 mb-20 text-center text-2xl">
          <Link className="flex items-center justify-center" href={"/"}>
            <Image src={"/assets/logo.png"} alt="logo" width={50} height={10} />
            <h1 className="text-4xl font-semibold">
              Tanvirul<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {Route.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
