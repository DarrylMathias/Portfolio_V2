"use client";
import { useState, useEffect } from "react";
import React from "react";
import CountUp from "react-countup";
import axios from "axios";

const Views = () => {
  const [views, setViews] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("/api/fetch-views")
        .then((res) => {
          setViews(res.data.views);
        })
        .catch((err) => {
          console.log(`Error : ${err}`);
        });
    };
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="views"
      className="pb-20 flex flex-col justify-center items-center px-5"
    >
      <div className="flex justify-center items-center w-full">
        <p className="text-lg sm:text-xl text-neutral-400 mb-2">
          Live Eyes on This page 👀
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center">
            <span className="text-purple-400">
              <CountUp
                key={views}
                start={0}
                end={views}
                startOnMount={true}
                enableScrollSpy={true}
                useIndianSeparators={true}
                duration={2}
              />
            </span>
          </h1>
        </p>
      </div>
    </section>
  );
};

export default Views;