"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Vacancies() {
  gsap.registerPlugin(ScrollTrigger);
  let text1 = useRef(null);

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
          start: "-30% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
    });

    // // changing of div height values
    // const divElements = document.querySelectorAll(".box");
    // const animations = Array.from(divElements).map((element) => {
    //   const tl = gsap.timeline({ paused: true });
    //   tl.to(element, { duration: 0.2, backgroundColor: "#feefd7" }).to(
    //     element,
    //     { duration: 0.2, height: 300 }
    //   );

    //   element.animation = tl;
    //   return tl;
    // });

    // divElements.forEach((element) => {
    //   element.addEventListener("mouseenter", () => {
    //     element.animation.play();
    //   });

    //   element.addEventListener("mouseleave", () => {
    //     element.animation.reverse();
    //   });
    // });

    return () => {
      ctx.revert();

    //   divElements.forEach((element) => {
    //     element.removeEventListener("mouseenter", () => {
    //       element.animation.play();
    //     });

    //     element.removeEventListener("mouseleave", () => {
    //       element.animation.reverse();
    //     });
    //   });
    };
  }, []);

  return (
    <div className="p-11 mt-28 h-[500px]">
      <p
        ref={(el) => {
          text1 = el;
        }}
        className="text-5xl font-bold"
      >
        Open Vacancies
      </p>
      <div className="mt-12 justify-between gap-10 flex">
        <div className="bg-[rgb(254,251,236)] box overflow-hidden p-7 w-[400px] h-[220px] hover:h-[350px] hover:bg-[#feefd7] transition-all duration-300 rounded-3xl">
          <h1 className="text-xl font-bold">Senior Full-Stack Engineer</h1>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Full Time Position</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Berlin or Remote</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">
              $65-85k, 0.5-1.50% equity share options
            </div>
          </div>
          <button className="button bg-black mt-12 rounded-full p-3 text-white">
            Start a test
          </button>
        </div>
        <div className="bg-[rgb(254,251,236)] p-7 w-[400px] h-[220px] hover:h-[350px] hover:bg-[#feefd7] transition-all duration-300 overflow-hidden box rounded-3xl">
          <h1 className="text-xl font-bold">Senior Designer</h1>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Full Time Position</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Berlin or Remote</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">
              $65-85k, 0.5-1.50% equity share options
            </div>
          </div>
          <button className="button bg-black mt-12 rounded-full p-3 text-white">
            Start a test
          </button>
        </div>
        <div className="bg-[rgb(254,251,236)] p-7 w-[400px] h-[220px] hover:h-[350px] hover:bg-[#feefd7] transition-all duration-300 overflow-hidden box rounded-3xl">
          <h1 className="text-xl font-bold">Superstar Intern</h1>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Full Time Position</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">Berlin or Remote</div>
          </div>
          <div className="flex mt-5 gap-4 items-center">
            <div className="bg-black h-[10px] w-[10px] rounded-full"></div>
            <div className="font-semibold ">
              $65-85k, 0.5-1.50% equity share options
            </div>
          </div>
          <button className="button bg-black mt-12 rounded-full p-3 text-white">
            Start a test
          </button>
        </div>
      </div>
    </div>
  );
}
