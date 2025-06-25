import  * as React from "react";

import { workExperience } from "@/data";
import { Button } from "@/components/ui/moving-border";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="pt-10 pb-30 w-full px-10 sm:px-30 lg:px-50">
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2">
        My <span className="text-purple-300">work experience</span>
      </h1>

      <div className="w-full mt-12 flex justify-center items-center">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={10000}
            borderRadius="1.75rem"
            loading="lazy"
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 bg-[linear-gradient(90deg,rgba(4,7,29,1)_0%,rgba(12,14,35,1)_100%)]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 ">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
                height={30}
                width={32}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-3xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-lg md:text-xl text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
