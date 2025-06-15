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
    fetchData();
    setInterval(fetchData, 1000);
  }, []);

  return (
    <section
      id="views"
      className="pb-20 flex flex-col justify-center items-center px-5"
    >
      <div className="flex justify-center items-center w-full">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-5xl text-center mt-7 mb-2">
          <span className="text-purple-300">Total views so far, </span>
          <CountUp key={views} start={0} end={views} startOnMount={true} enableScrollSpy={true} useIndianSeparators = {true}/>
        </h1>
      </div>
    </section>
  );
};

export default Views;
