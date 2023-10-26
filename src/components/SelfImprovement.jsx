"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BlueCutie from "../../public/assets/blueCutie.png";

export default function SelfImprovement() {
  gsap.registerPlugin(ScrollTrigger);

  let text1 = useRef(null);
  let text2 = useRef(null);
  let blue = useRef(null);
  const [num, setNum] = useState(1);

  function clickHandler(num) {
    setNum(num);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text1, {
        x: "-50%",
        duration: 1.5,
        opacity: 0,
        scale: 0.2,
        ease: "Power3.out",
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-50% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(text2, {
        x: "-50%",
        duration: 1.5,
        opacity: 0,
        scale: 0.2,
        ease: "Power3.out",
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });

      gsap.from(blue, {
        x: 330,
        y: 100,
        rotate: -90,
        duration: 2,
        ease: "Power3.out",
        scrollTrigger: {
          trigger: text1,
          start: "-30% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <div className="mt-14 relative w-full  ">
      <div className="mb-10">
        <p
          ref={(el) => {
            text1 = el;
          }}
          className="text-lg font-bold mb-4"
        >
          Wrong with self-improvement and how we&apos;re fixing it.
        </p>

        <h1
          ref={(el) => {
            text2 = el;
          }}
          className="text-4xl font-bold  "
        >
          Self-improvement. Ugh.
        </h1>
        <Image
          ref={(el) => {
            blue = el;
          }}
          className="absolute right-[58%] -top-[0.75rem]"
          width={105}
          src={BlueCutie}
        />
      </div>
      <div className="w-full transition-all duration-1000  flex flex-col items-center justify-center h-[600px] overflow-y-auto scrollbar-hide  ">
        <div
          onMouseEnter={() => clickHandler(1)}
          className="flex relative mt-20 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 1 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-28  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-1/3 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 1 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => clickHandler(2)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 2 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 2 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => clickHandler(3)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 3 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 3 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => clickHandler(4)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 4 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 4 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => clickHandler(5)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 5 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 5 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => clickHandler(6)}
          className="flex relative mt-8 cursor-default  right-2 top-2  justify-center items-center"
        >
          <div
            className={`h-[40px] w-[40px] ${
              num == 6 ? "bg-blue-200" : "bg-white"
            }  right-4  relative z-30 rounded-full flex items-center justify-center `}
          >
            <div className="w-1 bg-blue-800 h-32  mt-3 ">
              <div className="h-[20px] w-[20px]  rounded-full  relative top-12 right-2 bg-blue-950"></div>
            </div>
          </div>
          <div className={`${num == 6 ? "opacity-100" : "opacity-50"}`}>
            <div className="text-lg font-bold">
              Old habits are hard to break.
            </div>
            <div className="text-lg font-medium">
              The journey of change may be long, but our sessions are quick. We
              get <br /> to the point and tell you what you want to know (and
              nothing else).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
