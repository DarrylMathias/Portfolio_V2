"use client";

import * as React from "react";
import { projects } from "@/data";
import dynamic from "next/dynamic";
import CardSkeleton from "@/components/ui/Skeleton/CardSkeleton";
const PinContainer = dynamic(
  () => import("@/components/ui/3d-pin").then((mod) => mod.PinContainer),
  { ssr: false, loading: () => <CardSkeleton /> }
);
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className="pt-30 pb-20 px-5" id="projects">
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2">
        A small selection of{" "}
        <span className="text-purple-300">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-32 gap-y-18 mt-10">
        {projects.map((item) => (
          <Link
            href={item.link}
            target="_blank"
            key={item.id}
          >
            <div className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
              <PinContainer
                title={item.floatingTitle}
                href="https://twitter.com/mannupaaji"
                className = 'm-4'
              >
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                    {/* <img src="/bg.png" alt="bgimg" /> */}
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                    fill={true}
                    loading="lazy"
                  />
                </div>

                <h1 className="font-bold lg:text-4xl md:text-3xl text-2xl line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-md line-clamp-3"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          className="p-2"
                          fill={true}
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple-200">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
