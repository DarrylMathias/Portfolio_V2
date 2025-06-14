import Hero from "@/components/Hero";
import Image from "next/image";
import Grid from "@/components/Grid";
import AllSkills from "@/components/AllSkills";
import { NavbarDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto bg-[#000319]">
      <div className=" w-full">
        <NavbarDemo />
        <AllSkills />
      </div>
    </main>
  );
}
