"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Sign from "../../public/assets/sign.png";
import Image from "next/image";

export default function Test() {
  gsap.registerPlugin(ScrollTrigger);

  let text1 = useRef(null);
  let text2 = useRef(null);
  let button = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text1, {
        y: 50,
        duration: 1,
        opacity: 0,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=400",
          toggleActions: "play none pause reverse",
        },
      });
      gsap.from(text2, {
        y: 50,
        duration: 1,
        opacity: 0,
        delay: 0.2,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center ",
          end: "+=400",
          toggleActions: "play none pause reverse",
        },
      });

      gsap.from(button, {
        y: 50,
        scale: 0,
        opacity: 0,
        duration: 3.2,
        ease: "elastic.out(1, 0.6)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=400",
          toggleActions: "play none pause reverse",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="text-center mt-40">
      <div
        ref={(el) => {
          text1 = el;
        }}
      >
        <p className="text-lg font-semibold">We take privacy seriously</p>
        <h1 className="text-4xl mt-2 font-bold">Before you get started</h1>
      </div>
      <p
        ref={(el) => {
          text2 = el;
        }}
        className="text-2xl mt-5"
      >
        &quot;We won&apos;t share your answers with anyone (and won&apos;t ever
        tell <br />
        you which friends said what about you)&quot;
      </p>
      <p className="text-lg inline-block mt-12">with love, </p>
      <span className="inline-block">
        <Image src={Sign} width={150} />
      </span>
      <br />
      <button
        ref={(el) => {
          button = el;
        }}
        className="bg-black mt-8 rounded-2xl p-3 text-white"
      >
        Start a test
      </button>
      <p className="text-sm mt-5">Take only 5 minutes</p>
    </div>
  );
}
