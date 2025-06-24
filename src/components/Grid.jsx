"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

export default function Grid() {
  return (
    <section id="about">
      <BentoGrid className="max-w-7xl mx-auto my-10 px-5 sm:px-0">
        {gridItems.map((item, i) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            className={item.className}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            img={item.img}
            spareImg={item.spareImg}
            height={item.height}
            width={item.width}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
