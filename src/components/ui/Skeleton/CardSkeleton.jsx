// components/Skeleton.tsx
"use client";
import * as React from "react";
import clsx from "clsx";

export default function CardSkeleton({ className }){
  return (
    <div
      className={clsx(
        "relative flex flex-col justify-between p-4 rounded-2xl bg-neutral-200 dark:bg-neutral-800 animate-pulse shadow-md",
        className ?? "h-[32.5rem] w-96 mt-10"
      )}
    >
      {/* Image placeholder */}
      <div className="w-full h-[12rem] rounded-lg bg-neutral-300 dark:bg-neutral-700" />

      {/* Title */}
      <div className="h-6 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4 mt-6" />

      {/* Description lines */}
      <div className="space-y-2 mt-4">
        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-full" />
        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-5/6" />
        <div className="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-2/3" />
      </div>

      {/* Icon row */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex -space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-white dark:border-black"
            />
          ))}
        </div>
        <div className="h-4 w-24 bg-neutral-300 dark:bg-neutral-700 rounded" />
      </div>
    </div>
  );
};
