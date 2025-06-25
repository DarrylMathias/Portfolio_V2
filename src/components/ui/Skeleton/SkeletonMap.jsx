"use client";

import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function SkeletonMap() {
  return (
    <section
      id="map"
      className="py-5 flex flex-col justify-center items-center px-5"
    >
      <div className="text-center mt-7 mb-2">
        <Skeleton className="h-10 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] mb-4" />
        <Skeleton className="h-5 w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw]" />
      </div>

      <Skeleton className="h-[600px] w-[90%] rounded-lg mt-10" />
    </section>
  );
}
