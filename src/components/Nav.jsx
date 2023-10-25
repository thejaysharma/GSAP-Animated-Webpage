"use client";
import Image from "next/image";
import LogoOpen from "../../public/assets/logoo.png";
import LogoClose from "../../public/assets/logoc.jpg";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolling, setScrolling] = useState(false);
  const [logo, setLogo] = useState(LogoOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
        setLogo(LogoClose);
      } else {
        setScrolling(false);
        setLogo(LogoOpen);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarPadding = scrolling ? "py-2" : "py-4";
  return (
    <div
      className={`fixed px-12 w-full flex items-center justify-between font-medium z-10 transition-[padding_0.4s_ease] bg-white ${navbarPadding}`}
    >
      <div className="logo">
        <Image
          height={50}
          width={50}
          className="rounded-lg"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="links flex gap-8">
        <Link href="/">Emotions</Link>
        <Link href="/">Manifesto</Link>
        <Link href="/">Self-awareness test</Link>
        <Link href="/">Work With Us</Link>
      </div>
      <div>
        <button className=" bg-black text-white p-4 rounded-full">
          Download app
        </button>
      </div>
    </div>
  );
}
