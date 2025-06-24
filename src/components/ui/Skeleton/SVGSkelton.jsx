// components/SVGSkeleton.tsx
import * as React from "react";

export const SVGSkeleton = ({ className }) => {
  return (
    <div
      className={`animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-700 ${className}`}
    />
  );
};
