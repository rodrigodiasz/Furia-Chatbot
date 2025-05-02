"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  return (
    <footer className="footer sm:footer-horizontal bg-white dark:bg-[#000] text-black dark:text-white items-center p-6 shadow-footer">
      <aside className="grid-flow-col items-center gap-4">
        {/* Logo ou Ícone */}
        <Image
          src={
            currentTheme === "dark"
              ? "/logo-furia-black.svg"
              : "/furia-mobile.svg"
          }
          alt="Logo"
          width={60}
          height={60}
        />

        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Furia. All rights reserved.
        </p>
      </aside>

      <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
        {/* Social Links */}
        <a
          href="https://x.com/FURIA"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition text-2xl"
        >
          <FaXTwitter/>
        </a>
        <a
          href="https://www.instagram.com/furiagg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition text-2xl"
        >
          <FaInstagram/>
        </a>
        <a
          href="https://www.facebook.com/furiagg"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition text-2xl"
        >
          <FaFacebook/>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
