"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PinkCutie from "../../public/assets/PinkCutie.png";
import Image from "next/image";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let pinkie = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text1, {
        x: "-50%",
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "Power3.out",
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-40% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(text2, {
        x: "50%",
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "Power3.out",
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-40% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });

      gsap.from(pinkie, {
        scale: 0.5,
        opacity: 0,
        rotate: 100,
        delay: 1,
        duration: 3.2,
        ease: "elastic.out(1.2, 0.3)",
        scrollTrigger: {
          trigger: text1,
          start: "-40% center",
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
    <div className="h-[800px] p-8 flex rounded-3xl mt-56 bg-[#F3F1FF]">
      <div className="w-[50%] -ml-5  p-11 ">
        <h1
          ref={(el) => {
            text1 = el;
          }}
          className="text-5xl font-bold"
        >
          Work with us
        </h1>

        <div className="w-full flex flex-col gap-4 p-4 rounded-t-3xl mt-9 bg-white pb-10">
          <Image
            ref={(el) => {
              pinkie = el;
            }}
            width={50}
            src={PinkCutie}
          />
          <h1 className="text-xl font-bold">About</h1>
          <p className="text-lg leading-8">
            At ahead our goal is to make self- improvement fun and lasting. We
            know there&apos;s a way how to make it work. And that&apos;s what
            aHead is all about!
          </p>
        </div>

        <div className="w-full relative -top-4 flex flex-col gap-4 p-4 rounded-3xl  bg-[#FEF6F0] py-12 ">
          <h1 className="text-xl font-bold">Product</h1>
          <p className="text-lg leading-8">
            Sure, you could spend ages reading books or sitting in seminars on
            how to become a better spouse, parent, or manager - like we did...
          </p>
        </div>
      </div>
      <div className="w-[50%] p-11">
        <h1
          ref={(el) => {
            text2 = el;
          }}
          className="text-5xl text-[#6448D6] text-right font-bold"
        >
          ahead
        </h1>
        <div className="flex justify-center h-[600px] overflow-y-auto  scrollbar-thumb-[#8167e8] scrollbar-medium scrollbar-thin scrollbar-track-white  flex-col gap-5 items-center mt-11  p-4 -mr-8">
          <div className="w-[70%] h-[200px] justify-center  flex flex-col mt-72 gap-4 p-4 rounded-3xl  bg-white py-8 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
          <div className="w-[70%] h-[200px] justify-center  flex flex-col gap-4 p-4 rounded-3xl  bg-white py-12 ">
            <h1 className=" font-bold">
              Power through, even when <br /> the going gets tough
            </h1>
            <p className="text-sm ">
              We help you spot and work around whatever stands in the way, be it
              bad habits, fears, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
