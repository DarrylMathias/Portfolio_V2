"use client"

import Hero from "@/components/Hero";
import Image from "next/image";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto bg-[#000319]">
      <div className=" w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Map />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
