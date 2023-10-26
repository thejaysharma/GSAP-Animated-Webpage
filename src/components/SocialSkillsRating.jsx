"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Rank1 from "../../public/assets/1rank.png";
import Rank2 from "../../public/assets/2rank.png";
import Rank3 from "../../public/assets/3rank.png";

export default function SocialSkillsRating() {
  gsap.registerPlugin(ScrollTrigger);
  let text1 = useRef(null);
  let text2 = useRef(null);
  let text3 = useRef(null);
  let text4 = useRef(null);
  let text5 = useRef(null);
  let rank1 = useRef(null);
  let rank2 = useRef(null);
  let rank3 = useRef(null);
  let assignmen1 = useRef(null);
  let assignmen2 = useRef(null);
  let assignmen3 = useRef(null);
  let assignmen4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text1, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "Power3.out",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(text2, {
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "Power3.out",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });

      gsap.from(rank1, {
        scale: 0,
        opacity: 0,
        duration: 3,
        ease: "elastic.out(1.2, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(text3, {
        scale: 0,
        opacity: 0,
        // rotation:1000,
        // delay:0.4,
        duration: 1,
        // repeat:-1,
        // ease:"elastic.out(1.2, 0.3)",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center ",
          end: "+=800",
          // end:"bottom 50%",
          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(text4, {
        scale: 0,
        opacity: 0,
        // rotation:1000,
        // delay:0.4,
        duration: 1,
        // repeat:-1,
        // ease:"elastic.out(1.2, 0.3)",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center ",
          end: "+=800",
          // end:"bottom 50%",
          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(text5, {
        scale: 0,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center ",
          end: "+=800",
          // end:"bottom 50%",
          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(rank2, {
        scale: 0,
        opacity: 0,
        delay: 0.4,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,

          // markers: true,
          start: "-30% center ",
          end: "+=800",
          // end:"bottom 50%",
          toggleActions: "play complete pause reverse",
          // Whatever other ScrollTrigger vars you need here
        },
      });
      gsap.from(rank3, {
        scale: 0,
        opacity: 0,
        delay: 0.6,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });
      gsap.from(assignmen1, {
        scale: 0,
        opacity: 0,
        delay: 0,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete none reset",
        },
      });
      gsap.from(assignmen2, {
        scale: 0,
        opacity: 0,
        delay: 0.5,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete none reset",
        },
      });
      gsap.from(assignmen3, {
        scale: 0,
        opacity: 0,
        delay: 1,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete none reset",
        },
      });
      gsap.from(assignmen4, {
        scale: 0,
        opacity: 0,
        delay: 1.5,
        duration: 3,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: text1,
          // markers: true,
          start: "-30% center ",
          end: "+=800",
          toggleActions: "play complete none reset",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#EEF8FE] rounded-3xl h-[750px] p-12 mt-28 flex flex-col  items-center">
      <p
        ref={(el) => {
          text1 = el;
        }}
        className="text-lg font-semibold"
      >
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
      </p>
      <p
        ref={(el) => {
          text2 = el;
        }}
        className="text-5xl  font-bold mt-5"
      >
        Ever wondered what others think of you?
      </p>
      <div className="border-dashed mt-20  border-[#EAC57D] border-[2px] w-[80%] border-collapse">
        {" "}
      </div>
      <div className="flex relative bottom-7 w-full justify-between gap-10">
        <div className="flex flex-col  items-center">
          <Image
            ref={(el) => {
              rank1 = el;
            }}
            src={Rank1}
            width={60}
          />
          <p
            ref={(el) => {
              text3 = el;
            }}
            className="text-sm"
          >
            Answer questions on your social skills
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <Image
            ref={(el) => {
              rank2 = el;
            }}
            src={Rank2}
            width={60}
          />
          <p
            ref={(el) => {
              text4 = el;
            }}
            className="text-sm text-center"
          >
            Let others anonymously answer the same <br /> question about you
          </p>
        </div>
        <div className="flex flex-col  items-center">
          <Image
            ref={(el) => {
              rank3 = el;
            }}
            src={Rank3}
            width={50}
          />
          <p
            ref={(el) => {
              text5 = el;
            }}
            className="text-sm text-center"
          >
            Find out where you and others see things <br /> the same way - and
            where not!
          </p>
        </div>
      </div>
      <div className="bg-white items-center flex-col justify-center rounded-3xl flex  mt-20 w-[700px] h-[250px]">
        <div className="w-[80%] mt-12 h-1 rounded-3xl border-[2px] border-gray-400"></div>
        <div className="flex  justify-between w-full align-baseline items-center">
          <div className="relative bottom-[4.7rem]">
            <div
              ref={(el) => {
                assignmen1 = el;
              }}
              className="bg-[#6441EF] rounded-2xl p-4 px-6  text-white font-medium"
            >
              You
            </div>
            <div className=" relative left-14 mt-2 h-[20px] w-[20px] rounded-full bg-[#6441EF]"></div>
          </div>
          <div className="relative bottom-[0.85rem] ">
            <div className="h-[20px] w-[20px] mb-2 rounded-full bg-[#40C2FD]"></div>
            <div
              ref={(el) => {
                assignmen2 = el;
              }}
              className="bg-[#40C2FD] w-full rounded-2xl p-4 text-white font-medium"
            >
              Anonymonos 1
            </div>
          </div>

          <div className="bottom-[4.7rem]  relative">
            <div
              ref={(el) => {
                assignmen3 = el;
              }}
              className="bg-[#FDB438] mb-2 w-full rounded-2xl p-4  text-white font-medium"
            >
              Anonymonos 2
            </div>
            <div className="h-[20px] w-[20px] rounded-full bg-[#FDB438]"></div>
          </div>

          <div className="bottom-[0.85rem] relative">
            <div className="h-[20px] mb-2 w-[20px] relative left-14 rounded-full bg-[#57C897]"></div>
            <div
              ref={(el) => {
                assignmen4 = el;
              }}
              className="bg-[#57C897] w-full rounded-2xl p-4  text-white font-medium"
            >
              Anonymonos 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
