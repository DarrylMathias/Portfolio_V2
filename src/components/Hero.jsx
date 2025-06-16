"use client";

import React, { useEffect } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { NavbarDemo } from "@/components/Navbar";
import { FlipWords } from "./ui/flip-words";
import { CiLocationArrow1 } from "react-icons/ci";
import axios from "axios";

const Hero = () => {
  const words = [
    "developer",
    "problem solver",
    "tech enthusiast",
    "fullstack wizard",
    "visionary builder",
    "fast mover",
    "curious mind",
    "minimalist coder",
    "product thinker",
    "design-friendly dev",
    "debugging ninja",
    "code artist",
    "API whisperer",
    "idea chaser",
    "shipper of things",
  ];

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/get-ip")
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(`Error in fetching : ${err}`);
        });
    };
    fetchData()
  }, []);

  return (
    <>
      {/* Spotlight effect */}
      <div>
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw] blur-2xl"
            fill="blue"
          />
        </div>

        {/* Grid background */}
        <div className="h-[40rem] sm:h-[45rem] w-full items-center justify-center bg-white dark:bg-[#000319]">
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-screen",
              "[background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,rgba(228,228,231,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.5)_1px,transparent_1px)]",
              "dark:[background-image:linear-gradient(to_right,rgba(38,38,38,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.2)_1px,transparent_1px)]"
            )}
          />

          {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" /> */}

          <NavbarDemo isRoute = {false}/>

          {/* Actual hero section */}
          <div className="flex justify-center relative my-12 z-20 sm:py-20 pt-12">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <p className="uppercase tracking-widest text-xs text-center text-violet-500 dark:text-blue-100 max-w-80">
                Dynamic Web Magic with Next.js
              </p>
              <TextGenerateEffect words="Transforming Vision into Elegant Digital Interfaces" />

              <p className="text-center md:tracking-wider my-6 text-lg md:text-xl lg:text-2xl">
                Hi! I&apos;m{" "}
                <span className="text-violet-400">Darryl Mathias</span>, a
                <FlipWords words={words} />@ Sophomore, TSEC CE.
              </p>

              {/* Button */}
              <a href="#projects">
                <button
                  className="relative inline-flex h-12 overflow-hidden
              rounded-full p-[1px] focus:outline-none focus:ring-2
              focus:ring-slate-400 focus:ring-offset-2
              focus:ring-offset-slate-50 my-2"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                    View Projects&nbsp;&nbsp;
                    <CiLocationArrow1 />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
