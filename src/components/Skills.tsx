"use client";

import React from "react";

import { skills } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MagicButton from "./MagicButton";
import { CiLocationArrow1 } from "react-icons/ci";

const Skills = () => {
  return (
    <section
      id="testimonials"
      className="py-20 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-7 mb-2">
        Skills that <span className="text-purple-300">differentiate me</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mb-2">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards items={skills} direction="left" speed="slow" />
        </div>
      </div>

      <a href="/skills">
        <MagicButton
          title={"View all skills"}
          icon={<CiLocationArrow1 />}
          position="left"
          otherClasses="!bg-[#161A31] mx-auto"
        />
      </a>
    </section>
  );
};

export default Skills;
