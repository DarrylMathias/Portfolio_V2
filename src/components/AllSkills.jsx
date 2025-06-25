"use client";

import * as React from "react";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import MagicButton from "./ui/MagicButton";
import { CiLocationArrow1 } from "react-icons/ci";
import { skills } from "@/data";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const AllSkills = () => {
  return (
    <section
      id="allskills"
      className="py-20 flex flex-col justify-center items-center px-3"
    >
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2">
        All of my <span className="text-purple-300">Skills</span> in one place
      </h1>

      {skills.length ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-3 px-6">
          {skills.map((item, idx) => (
            <CardContainer key={idx} className="inter-var">
              <CardBody className="w-full sm:h-60 h-40 relative rounded-2xl border border-b-0 border-slate-800 p-5 md:p-8">
                <div className="bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]">
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <blockquote>
                      <div
                        aria-hidden="true"
                        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                      />
                      <div className="relative z-20 mt-6 flex flex-row items-center">
                        <CardItem className="me-3">
                          <Image
                            src={item.image}
                            alt="logo"
                            height={30}
                            width={30}
                            loading={idx < 4 ? "eager" : "lazy"}
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
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </ul>
      ) : (
        <Skeleton className="w-full h-40 rounded-xl" />
      )}

      <Link href="/">
        <MagicButton
          title={"Back"}
          icon={<CiLocationArrow1 />}
          position="left"
          otherClasses="!bg-[#161A31] mx-auto"
        />
      </Link>
    </section>
  );
};

export default AllSkills;
