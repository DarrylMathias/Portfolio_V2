import { Skeleton } from "@/components/ui/Skeleton/Skeleton";

export default function HeroSkeleton() {
  return (
    <div className="bg-[#000319] h-full">
      <section className="flex justify-center relative my-12 z-20 sm:py-20 pt-12">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center space-y-6">
          {/* Small heading */}
          <Skeleton className="h-4 w-64 rounded-full" />

          {/* Big animated heading placeholder */}
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="h-15 w-72 md:w-96 lg:w-[46rem] rounded" />
            <Skeleton className="h-15 w-64 md:w-80 lg:w-[50rem] rounded" />
          </div>

          {/* Subtitle */}
          <Skeleton className="h-6 w-[90%] max-w-2xl mt-4 rounded" />

          {/* Button */}
          <div className="mt-4">
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
}