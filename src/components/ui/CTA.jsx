"use client";
import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { Button } from "./button";
import { cn } from "@/lib/utils";

const CTA = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <Button
      ref = {ref}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2  my-2",
        className
      )}
      {...props}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] prefers-reduced-motion"
        style={{ pointerEvents: "none" }}
      />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl"
        style={{ pointerEvents: "none" }}
      >
        Subscribe to <strong>&nbsp;&nbsp;Daily Spark</strong>&nbsp;&nbsp;
        <CiLocationArrow1 />
      </span>
    </Button>
  );
});

export default CTA;
