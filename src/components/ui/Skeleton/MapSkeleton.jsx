"use client";
import * as React from "react";
import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function MapSkeleton({ className }){
  return (
    <section
          id="map"
          className="py-5 flex flex-col justify-center items-center px-5"
        >
          <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2">
            Audience from <span className="text-purple-300">6 Continents</span>{" "}
            Around the World
          </h1>
          <p className="text-neutral-300 md:mt-4 mb-10 max-w-3xl sm:max-w-3xl text-center">
            From <span className="text-purple-300">Mountain View to Tokyo</span>,
            visitors leave a mark - made using{" "}
            <a
              href="https://react-leaflet.js.org/"
              className="underline text-blue-400"
            >
              React Leaflet
            </a>{" "}
            and{" "}
            <a href="https://ipapi.co/" className="underline text-blue-400">
              ipapi.co
            </a>{" "}
          </p>
          <Skeleton className="h-[600px] w-[90%] rounded-lg mx-auto" />
        </section>
  );
};
