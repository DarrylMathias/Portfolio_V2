"use client";

import React from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
const MarkerClusterGroup = dynamic(
  () => import("react-leaflet-markercluster").then((mod) => mod.default),
  { ssr: false }
);

// Marker img fetch
import L from "leaflet";
import axios from "axios";

const DefaultIcon = L.icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Yellow_dot.svg", // simple red dot
  iconRetinaUrl:
    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Yellow_dot.svg",
  iconSize: [12, 12],
  iconAnchor: [7, 25],
  popupAnchor: [1, -24],
  tooltipAnchor: [10, -20],
  shadowSize: [25, 25],
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [allCoordsObj, setAllCoordsObj] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `/api/fetch-coords?secret=${process.env.NEXT_PUBLIC_INTERNAL_SECRET}`
        )
        .then((res) => {
          const filteredCoords = res.data.allUserCoords.filter(
            (coord) => coord.lat != null && coord.lon != null
          );
          setAllCoordsObj(filteredCoords);
        })
        .catch((error) => {
          console.log(`Error in fetching, ${error}`);
        });
    };
    fetchData();
  }, []);

  return (
    <section
      id="map"
      className="py-5 flex flex-col justify-center items-center px-5"
    >
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-2">
        Audience from <span className="text-purple-300">6 Continents</span>{" "}
        Around the World
      </h1>
      <p className="text-neutral-300 md:mt-4 mb-10 max-w-3xl sm:max-w-3xl text-center">
        From <span className="text-purple-300">Mountain View to Tokyo</span>,
        visitors leave a mark - made using{" "}
        <a
          href="https://react-leaflet.js.org/"
          className="underline text-blue-400"
        >
          React Leaflet
        </a>{" "}
        and{" "}
        <a href="https://ipapi.co/" className="underline text-blue-400">
          ipapi.co
        </a>{" "}
      </p>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "90%" }}
        className="rounded-lg"
        preferCanvas={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <MarkerClusterGroup chunkedLoading showCoverageOnHover={false}> */}
        {allCoordsObj.map((coord, i) => (
          <Marker key={i} position={[coord.lat, coord.lon]}>
            {coord.city && coord.country && (
              <Popup>
                {["Floating Router", "Penguinville", "Null Island"].includes(coord.city) ? (
                  <div>
                    {coord.city}, {coord.country}
                    <br />
                    <small>(Totally real. <i>Source</i> : Trust me bro 🫡)</small>
                  </div>
                ) : (
                  `${coord.city}, ${coord.country}`
                )}
              </Popup>
            )}
          </Marker>
        ))}
        {/* </MarkerClusterGroup> */}
      </MapContainer>
    </section>
  );
};

export default Map;
