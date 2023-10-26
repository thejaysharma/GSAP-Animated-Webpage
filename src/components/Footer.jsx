"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Logo from "../../public/assets/logoc.jpg";
import Location from "../../public/assets/location.png";
import Mail from "../../public/assets/mail.png";
import Apple from "../../public/assets/Apple.png";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  let logo = useRef(null);
  let container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(logo, {
        scale: 0,
        opacity: 0,
        rotate: 100,
        // delay:0.4,
        duration: 4.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: container,
          //   markers: true,
          start: "-30% center",
          end: "+=200",
          toggleActions: "play complete pause reverse",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div
      className="mt-24 "
      ref={(el) => {
        container = el;
      }}
    >
      <hr />
      <div className="mt-6 w-full gap-6 flex flex-col items-center justify-center">
        <Image
          ref={(el) => {
            logo = el;
          }}
          src={Logo}
          width={80}
          className=" rounded-xl"
        />
        <p className="-mt-4 text-3xl font-bold text-[#6448D6]">ahead</p>
        <div className="flex gap-8">
          <div className="flex items-center justify-center">
            <Image src={Location} width={40} />
            <div>Auguststrabe 26, 10117 Berlin</div>
          </div>
          <div className="flex items-center justify-center">
            <Image src={Mail} width={40} />
            <div>hi@ahead-app.com</div>
          </div>
        </div>
        <Image className="" height={100} width={150} src={Apple} />
        <p>© 2022 Ahead app. All Right reserved</p>
      </div>
    </div>
  );
}
