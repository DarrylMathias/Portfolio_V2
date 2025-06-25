"use client";

import dynamic from "next/dynamic";
import MapSkeleton from "../ui/Skeleton/MapSkeleton";
const Map = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
  loading: () => <MapSkeleton />,
});


export default function MapWrapperClient({ allUserCoords }) {
  return <Map allUserCoords={allUserCoords} />;
}
