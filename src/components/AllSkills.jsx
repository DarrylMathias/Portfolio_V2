"use client";

import React from "react";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MagicButton from "./MagicButton";
import { CiLocationArrow1 } from "react-icons/ci";
import { skills } from "@/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const AllSkills = () => {
  return (
    <section
      id="allskills"
      className="py-20 flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-3 mb-3">
        All of my <span className="text-purple-300">Skills</span> at one place
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-3 px-6">
        {skills.map((item, idx) => (
          <CardContainer key={idx} className="inter-var">
            <CardBody className="w-full h-60 relative rounded-2xl border border-b-0 border-slate-800 p-5 md:p-8">
              <div
                style={{
                  background:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <blockquote>
                    <div
                      aria-hidden="true"
                      className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                    />
                    <div className="relative z-20 mt-6 flex flex-row items-center">
                      <CardItem className="me-3">
                        <img
                          src={item.image}
                          alt="logo"
                          height={30}
                          width={30}
                        />
                      </CardItem>
                      <CardItem className="flex flex-col gap-1">
                        <span className="sm:text-2xl text-xl font-bold leading-[1.6] text-white">
                          {item.name}
                        </span>
                      </CardItem>
                    </div>
                    <CardItem className="relative z-20 text-sm md:text-base leading-[1.6] text-white font-normal py-5">
                      {item.description}
                    </CardItem>
                  </blockquote>
                </a>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </ul>

      <a href="/">
        <MagicButton
          title={"Back"}
          icon={<CiLocationArrow1 />}
          position="left"
          otherClasses="!bg-[#161A31] mx-auto"
        />
      </a>
    </section>
  );
};

export default AllSkills;
