"use client";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { gsap, Linear, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Leaf from "../../public/assets/leaf.png";
import OrangeCircle from "../../public/assets/orangeCircle.png";
import RedCircle from "../../public/assets/redCircle.png";
import OrangeGhost from "../../public/assets/orangeGhost.png";
import OrangeFilledCircle from "../../public/assets/orangeFilledCircle.png";
import Apple from "../../public/assets/Apple.png";
import BlueGhost from "../../public/assets/blueGhost.png";
import PinkGhost from "../../public/assets/pinkGhost.png";
import PinkCutie from "../../public/assets/PinkCutie.png";
import BlueCutie from "../../public/assets/blueCutie.png";
import OrangeCutie from "../../public/assets/orangeCutie.png";
import MobileSurr from "../../public/assets/MobileSurr.png";
import MobilePic from "../../public/assets/MobilePic.png";

export default function Landing() {
  let leaf1 = useRef(null);
  let leaf2 = useRef(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let banner = useRef(null);
  let div = useRef(null);
  let text = useRef(null);
  const t1 = gsap.timeline();

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(text, {
        duration: 1,
        opacity: 0,
        x: -100,
      });

      gsap.from(leaf1, {
        rotate: 360,
        duration: 3,
        repeat: -1,
      });
      gsap.from(circle1, {
        rotation: 3000,
        duration: 3,
        repeat: -1,
      });

      gsap.to(leaf2, {
        duration: 1,
        // ease: "power3.inOut",
        rotate: 360,
        repeat: -1,
        // scrollTrigger: ".trigger"
      });

      gsap.from(circle2, {
        scale: 0,
        opacity: 0,
        duration: 3.2,
        repeat: -1,
        ease: "elastic.out(1.2, 0.3)",
      });
      gsap.from(banner, {
        scale: 0,
        rotate: 100,
        duration: 4.2,
        repeat: -1,
        ease: "elastic.out(1.2, 0.3)",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={(el) => (div = el)}
      className="bg-[#EFECFF] mlt overflow-hidden p-12 relative mt-5 h-[700px] flex items-center  justify-around gap-10 rounded-3xl"
    >
      {/* Ahead Section */}
      <Image
        ref={(el) => (leaf1 = el)}
        className="absolute top-[6rem] left-1/2 rotate-[35deg] "
        width={80}
        src={Leaf}
      />
      <Image
        ref={(el) => (leaf2 = el)}
        className="absolute -top-[4rem] left-[4.5rem] -rotate-[25deg] "
        width={250}
        src={Leaf}
      />
      <Image
        ref={(el) => (circle1 = el)}
        className="absolute top-[10rem] left-[47%]  "
        width={70}
        src={OrangeCircle}
      />
      <Image
        ref={(el) => (circle2 = el)}
        className="absolute top-[3rem] left-[54%]  "
        width={30}
        src={OrangeFilledCircle}
      />
      <Image
        className="absolute -top-[2%] right-[25%]  "
        width={50}
        src={OrangeFilledCircle}
      />
      <Image
        className="absolute top-[60%] -left-[1.5%]  "
        width={50}
        src={OrangeFilledCircle}
      />
      <Image
        className="absolute -bottom-[3%] left-[33%] "
        width={50}
        src={RedCircle}
      />
      <div className="flex gap-5 flex-col ">
        <p className="text-xl">Ahead app</p>
        <h1
          ref={(el) => (text = el)}
          className="text-6xl leading-[60px]  font-bold"
        >
          Master Your Life <br /> by mastering <br />
          emotions
        </h1>
        <div className="flex mt-6 gap-6">
          <Image className="" height={100} width={150} src={Apple} />
          <div>
            <div className="flex text-2xl"> ⭐ ⭐ ⭐ ⭐ ⭐</div>
            <p>100+ AppStore reviews</p>
          </div>
        </div>
      </div>

      {/* Sticker Section */}
      {/* circle one */}
      <div className="h-[500px] relative w-[500px]  rounded-full border-dashed border-white flex justify-center items-center  border-[7px] ">
        <Image
          src={BlueGhost}
          width={25}
          id="small2"
          className="absolute right-[33%] top-[-9px] rotate-[110deg]"
        />
        <Image
          src={PinkGhost}
          width={25}
          id="small6"
          className="absolute  bottom-[13rem] right-[29.8rem]"
        />
        <Image
          src={OrangeGhost}
          width={25}
          id="small5"
          className="absolute bottom-[2rem] right-[5rem] -rotate-[125deg]"
        />
        <Image
          width={150}
          className="absolute bottom-[22rem] right-[20rem]"
          id="small4"
          src={BlueCutie}
        />
        <Image
          width={100}
          className="absolute bottom-[0] right-[22rem]"
          id="small"
          src={PinkCutie}
        />
        <Image
          width={100}
          className="absolute  bottom-[16rem] -right-[3rem]"
          id="small3"
          src={OrangeCutie}
        />
        <div className="h-[250px] bg-[#DDD6F8] rounded-full w-[250px] relative   flex justify-center items-center">
          <Image
            ref={(el) => {
              banner = el;
            }}
            src={MobileSurr}
            className="absolute -left-16"
            height={50}
            width={120}
          />
          <Image width={150} height={200} src={MobilePic} />
        </div>
      </div>
    </div>
  );
}
