import * as React from "react";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";
import { SVGSkeleton } from "@/components/ui/Skeleton/SVGSkelton";

const HeroNavbarSkeleton = () => {
  const widths = ["w-[80px]", "w-[90px]", "w-[70px]", "w-[85px]", "w-[75px]"];
  return (
    <div className="bg-[#000319] h-full">
      <div className="sticky inset-x-0 top-1 z-40 w-full py-5">
        {/* Desktop Nav */}
        <div className="relative z-50 mx-auto hidden w-full max-w-7xl items-center justify-between rounded-full px-4 py-2 lg:flex">
          {/* Logo Left */}
          <div className="z-20 mr-4 flex items-center space-x-2 px-2 py-1">
            <SVGSkeleton className="w-[30px] h-[30px]" />
            <Skeleton className="w-[100px] h-[20px]" />
          </div>

          {/* Center Nav Links */}
          <div className="absolute inset-0 hidden items-center justify-center space-x-4 lg:flex h-16">
            {widths.map((width, i) => (
              <Skeleton key={i} className={`${width} h-[20px]`} />
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Skeleton className="w-[80px] h-[36px] rounded-md" />
            <Skeleton className="w-[90px] h-[36px] rounded-md" />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden rounded-2xl">
          <div className="flex w-full flex-row items-center justify-between px-2">
            <div className="flex items-center space-x-2">
              <SVGSkeleton className="w-[30px] h-[30px]" />
              <Skeleton className="w-[100px] h-[20px]" />
            </div>
            <Skeleton className="w-[24px] h-[24px] rounded-md" />{" "}
            {/* Fake hamburger icon */}
          </div>
        </div>
      </div>
      <section className="flex justify-center relative my-12 z-20 sm:py-20 pt-12">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          {/* Small heading */}
          <Skeleton className="h-4 w-64 rounded-full" />

          {/* Big animated heading placeholder */}
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="h-15 w-72 md:w-96 lg:w-[46rem] rounded" />
            <Skeleton className="h-15 w-64 md:w-80 lg:w-[50rem] rounded" />
          </div>

          {/* Subtitle */}
          <Skeleton className="h-6 w-[90%] max-w-2xl mt-4 rounded" />

          {/* Button */}
          <div className="mt-4">
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroNavbarSkeleton;
