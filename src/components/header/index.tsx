"use client";

import { useEffect, useState } from "react";
import MenuDesktopComponent from "./Desktop";
import MenuMobileComponent from "./Mobile";
import { cn } from "@/lib/utils";

const HeaderComponent = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "bg-bg h-[68px] max-md:h-14 fixed top-0 w-full z-50 transition-all grid grid-cols-3 grid-rows-1 items-center py-4 px-8 max-xl:px-6 max-md:px-3 max-md:flex max-md:justify-between",
        {
          "translate-y-0": visible,
          "-translate-y-full": !visible,
        }
      )}
    >
      <h1 className="text-3xl max-xl:text-2xl">
        <a href="#inicio" className="">
          Woodland Retreat
        </a>
      </h1>

      <MenuMobileComponent />
      <MenuDesktopComponent />

      <div className="flex justify-end max-md:hidden">
        <a
          href="https://wa.me/5553999543869"
          target="__blank"
          className="bg-text px-5 py-2 rounded-sm text-sm text-bg"
        >
          BOOK NOW
        </a>
      </div>
    </header>
  );
};

export default HeaderComponent;
