"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../../public/logo-login.png";
import { ThemeSwitch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const NavBar = () => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-allduration-300 ${
        scrolled
          ? "bg-white dark:bg-[#000] shadow-md"
          : "dark:bg-[#111] bg-stone-50"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${
          scrolled ? "py-6" : "py-4"
        }`}
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2">
          {scrolled ? (
            <Image
              src={
                currentTheme === "dark"
                  ? "/furia-mobile.svg"
                  : "/logo-furia-black.svg"
              }
              alt="Logo"
              width={100}
              height={100}
            />
          ) : (
            <Image src={Logo} alt="Logo Furia" width={100} height={100} />
          )}
        </a>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center">
          <ul className="flex gap-8 items-center">
            <li className="group relative">
              <a
                href="#history"
                className={`transition ${
                  scrolled
                    ? "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                    : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                }`}
              >
                Nossa História
              </a>
            </li>
            <li className="group relative">
              <a
                href="#lineup"
                className={`transition ${
                  scrolled
                    ? "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                    : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                }`}
              >
                Line-up
              </a>
            </li>
            <li className="group relative">
              <a
                href="#ranking"
                className={`transition ${
                  scrolled
                    ? "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                    : "text-black dark:text-white hover:text-red-500 dark:hover:text-red-500"
                }`}
              >
                Ranking & Títulos
              </a>
            </li>
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
