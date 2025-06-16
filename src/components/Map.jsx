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

// Marker img fetch
import L from "leaflet";
import axios from "axios";

const DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [15, 25],
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
        .get("/api/fetch-coords")
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
      <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-6xl text-center mt-7 mb-5">
        Audience around <span className="text-purple-300">The World</span>
      </h1>
      <p className="text-neutral-300 md:mt-4 mb-10 max-w-xl sm:max-w-3xl text-center">
        📡 Every visitor to this page, tracked down to the last coordinate using{" "}
        <a
          href="https://react-leaflet.js.org/"
          className="underline text-blue-400"
        >
          React Leaflet
        </a>{" "}
        and{" "}
        <a href="https://ipapi.co/" className="underline text-blue-400">
          ipapi.co
        </a>
        .
      </p>

      <MapContainer
        center={[20, 73]}
        zoom={4}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "90%" }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allCoordsObj.map((coord, i) => (
          <Marker key={i} position={[coord.lat, coord.lon]}>
            {coord.city && coord.country && (
              <Popup>{`${coord.city}, ${coord.country}`}</Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
