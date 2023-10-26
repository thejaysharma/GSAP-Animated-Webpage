"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import OrangeCutie from "../../public/assets/orangeCutie.png";
import EmojiHeart from "../../public/assets/emojiHeart.png";

export default function FamiliarCards() {
  let text = useRef(null);
  let orange = useRef(null);
  let container = useRef(null);
  let sec = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(text, {
        x: "-50%",
        duration: 1,
        opacity: 0,
        scale: 0.5,
        ease: "Power3.out",
        ease: "elastic.out(1, 0.8)",
        scrollTrigger: {
          trigger: container,
          // markers: true,
          start: "-30% center",
          end: "+=800",
          toggleActions: "play complete pause reverse",
        },
      });

      gsap.from(orange, {
        x: 500,
        y: 100,
        duration: 1,
        rotate: -90,
        ease: "Power3.out",
        scrollTrigger: {
          trigger: container,
          start: "-30% center",
          end: "+=800",
          // markers: true,
          toggleActions: "play complete pause reverse",
        },
      });

      gsap.to(sec, {
        scrollLeft: 1000,
        duration: 1,
        ease: "Power3.out",
        scrollTrigger: {
          trigger: container,
          start: "-30% center",
          end: "+=800",
          // markers: true,
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
      className=" relative mlt pt-36 z-0"
      id="Emotions"
      ref={(el) => {
        container = el;
      }}
    >
      <div className="flex gap-10">
        <h1
          ref={(el) => {
            text = el;
          }}
          className="text-4xl font-bold"
        >
          Does this sound familiar...
        </h1>
        <Image
          src={OrangeCutie}
          ref={(el) => {
            orange = el;
          }}
          width={100}
          className=" relative -top-10 -rotate-[30deg]"
        />
      </div>
      <div
        ref={(el) => {
          sec = el;
        }}
        className="mt-9 flex h-[350px] gap-2  relative whitespace-nowrap overflow-hidden z-10"
      >
        <div className=" translate-y-6 rounded-3xl inline-block gap-2  p-9 py-2 bg-[#D9F2FF] h-[250px] w-[400px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm flex ">
              You get angry and defensive, <br /> instead of staying open and
              working
              <br /> towards common ground.
            </div>
          </div>
        </div>

        <div className=" rounded-3xl ml-12 inline-block gap-2 translate-y-6 p-9 py-2 bg-[#EFECFF] h-[250px] w-[400px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm">
              You get angry and defensive, instead <br /> of staying open and
              working towards
              <br />
              common ground.
            </div>
          </div>
        </div>
        <div className="boxtoscroll rounded-3xl -rotate-[6deg] relative z-50 translate-y-6 overflow-y-visible ml-12 inline-block gap-2  p-9 py-2 bg-[#6441EF] h-[260px] w-[320px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm">
              You get angry and defensive, instead <br /> of staying open and
              working towards
              <br />
              common ground.
            </div>
          </div>
        </div>
        <div className=" rounded-3xl ml-12 inline-block gap-2 translate-y-6  p-9 py-2 bg-[#FEF0D6] h-[250px] w-[400px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm">
              You get angry and defensive, instead <br /> of staying open and
              working towards
              <br />
              common ground.
            </div>
          </div>
        </div>
        <div className=" rounded-3xl ml-12 inline-block gap-2 translate-y-6  p-9 py-2 bg-[#D9F2FF] h-[250px] w-[400px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm">
              You get angry and defensive, instead <br /> of staying open and
              working towards
              <br />
              common ground.
            </div>
          </div>
        </div>
        <div className=" rounded-3xl ml-12 inline-block gap-2 translate-y-6 p-9 py-2 bg-[#EFECFF] h-[250px] w-[400px]">
          <Image className="" width={60} height={100} src={EmojiHeart} />
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-bold">You argue with a colleague</h1>
            <div className="text-sm">
              You get angry and defensive, instead <br /> of staying open and
              working towards
              <br />
              common ground.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
