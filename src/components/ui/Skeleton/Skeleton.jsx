// components/Skeleton.tsx
import * as React from "react";
import clsx from "clsx";

export const Skeleton = ({ className }) => {
  return (
    <div
      className={clsx(
        "animate-pulse rounded bg-neutral-300 dark:bg-neutral-700",
        className
      )}
    />
  );
};
