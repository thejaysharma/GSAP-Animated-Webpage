"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import OrangeCircle from "../../public/assets/orangeCircle.png";
import OrangeFilledCircle from "../../public/assets/orangeFilledCircle.png";
import Leaf from "../../public/assets/leaf.png";
import PinkCutie from "../../public/assets/PinkCutie.png";
import Flower from "../../public/assets/flower.png";
import Rank1 from "../../public/assets/1rank.png";

export default function AheadApp() {
  let circle = useRef(null);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let cutie = useRef(null);
  let leaf1 = useRef(null);
  let leaf2 = useRef(null);
  let smallcircle = useRef(null);
  let orangecircle = useRef(null);
  let flower = useRef(null);
  let rank = useRef(null);
  let discp = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle, {
        x: 300,
        y: 390,
        duration: 3,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });

      gsap.from(cutie, {
        scale: 0,
        opacity: 0,
        rotate: 100,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(orangecircle, {
        scale: 0,
        rotation: 3000,
        duration: 2,
        repeat: -1,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(smallcircle, {
        scale: 0.5,
        duration: 1,
        ease: "elastic.out(1.2, 0.5)",
        repeat: -1,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(flower, {
        rotate: 360,
        duration: 2,
        repeat: -1,
        ease: "none",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });

      gsap.from(leaf2, {
        rotate: -360,
        duration: 2,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(leaf1, {
        rotate: 360,
        duration: 2,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center",
          end: "+=800",

          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(rank, {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 3,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });

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
          start: "-30% center",
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

      gsap.from(discp, {
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
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="relative pt-12" id="Manifesto">
      <Image
        ref={(el) => {
          flower = el;
        }}
        className="absolute right-20 top-14 z-20"
        src={Flower}
        width={80}
      />
      <div className="overflow-hidden relative rounded-3xl h-[600px] p-14 mt-10 bg-[#FEF6F0]">
        <Image
          ref={(el) => {
            leaf2 = el;
          }}
          className="absolute right-16 top-20"
          src={Leaf}
          width={80}
        />
        <p
          ref={(el) => {
            text1 = el;
          }}
          className="text-xl font-bold"
        >
          Built out fustration
        </p>
        <h1
          ref={(el) => {
            text2 = el;
          }}
          className="text-5xl font-bold"
        >
          Meet the ahead app
        </h1>
        <div className="flex justify-between  gap-10 -mt-10 items-center h-[100%]  ">
          <div className="flex relative w-[50%] -ml-12 mr-10 items-center justify-center">
            <div
              ref={(el) => {
                circle = el;
              }}
              className="absolute h-[240px] w-[240px] -left-20 top-[4rem] rounded-full bg-[#FBE8DC]"
            ></div>
            <Image
              ref={(el) => {
                orangecircle = el;
              }}
              src={OrangeCircle}
              className="absolute left-[23rem] top-[12rem] "
              width={70}
            />
            <Image
              ref={(el) => {
                leaf1 = el;
              }}
              src={Leaf}
              className="absolute left-[27rem] top-[9rem] "
              width={70}
            />
            <Image
              ref={(el) => {
                smallcircle = el;
              }}
              src={OrangeFilledCircle}
              width={30}
              height={10}
              className="absolute left-[30rem] top-[5rem] "
            />
            <div className="h-[250px] relative w-[250px] rounded-full bg-[#F6F6F6] flex justify-center items-center">
              <div>
                <Image
                  ref={(el) => {
                    rank = el;
                  }}
                  src={Rank1}
                  width={60}
                  className="absolute top-0 left-24"
                />
              </div>
              <div className="h-[200px] flex justify-center  items-center  w-[200px] rounded-full bg-white">
                <Image
                  ref={(el) => {
                    cutie = el;
                  }}
                  width={100}
                  className="relative right-2  -rotate-12"
                  src={PinkCutie}
                />
              </div>
            </div>
          </div>
          <div
            className="w-[50%] text-2xl"
            ref={(el) => {
              discp = el;
            }}
          >
            A personalized pocket coach that provides bite- sized,
            science-driven tools to boost emotional intelligence.
            <br />
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </div>
        </div>
      </div>
    </div>
  );
}
