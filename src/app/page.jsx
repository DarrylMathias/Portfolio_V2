import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import MapWrapper from "@/components/Map/MapWrapper";
import { Suspense } from "react";
import HeroNavbarSkeleton from "@/components/ui/Skeleton/HeroNavbarSkeleton";
import SkeletonMap from "@/components/ui/Skeleton/SkeletonMap";

export default async function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto bg-[#000319]">
      <div className=" w-full">
        <Hero />
        <Grid />
        <RecentProjects />
        <Suspense fallback={<SkeletonMap />}>
          <MapWrapper />
        </Suspense>
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
