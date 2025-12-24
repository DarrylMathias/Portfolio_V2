"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaMediumM, FaSignal } from "react-icons/fa";
import { featuredProject as data } from "@/data/index";

const SelfHostedCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1000px] mx-auto m-20 p-[1px] rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20"
    >
      <div className="bg-[#04071D] rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row gap-10 items-center overflow-hidden">
        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {data.title}
            </h2>

            <p className="text-purple-100/70 text-lg leading-relaxed">
              {data.description}
            </p>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <a
              href={data.mediumLink}
              target="_blank"
              className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-purple-500/20">
                <FaMediumM size={20} />
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest opacity-50">
                  Article
                </span>

                <span className="font-semibold underline underline-offset-4">
                  Read on Medium
                </span>
              </div>
            </a>

            <a
              href={data.statusLink}
              target="_blank"
              className="flex items-center gap-3 text-purple-200 hover:text-white transition-colors group"
            >
              <div className="p-2 bg-white/10 rounded-lg group-hover:bg-green-500/20">
                <FaSignal size={18} className="text-green-400" />
              </div>

              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest opacity-50">
                  Real-time
                </span>

                <span className="font-semibold underline underline-offset-4">
                  Uptime Status Page
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="flex-1 relative w-full group">
          <a href={data.mainLink} target="_blank" className="block relative">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10">
              <Image
                src={data.img}
                alt="Self hosted android setup"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex justify-between items-center">
                <span className="text-xs font-mono text-purple-200 truncate">
                  {data.mainLink.replace("https://", "")}
                </span>

                <FaExternalLinkAlt size={12} className="text-purple-300" />
              </div>
            </div>
          </a>

          <div className="flex items-center justify-end mt-7 mb-3">
            <div className="flex items-center">
              {data.tech.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  <Image
                    src={icon}
                    key={index}
                    alt="icon5"
                    className={icon === "/termux.svg" ? "invert brightness-0 p-2" : "p-2"}
                    fill={true}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SelfHostedCard;
