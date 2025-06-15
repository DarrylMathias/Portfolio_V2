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
import { useState } from "react";
import "leaflet/dist/leaflet.css";

// Marker img fetch
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import axios from "axios";

const DefaultIcon = L.icon({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

let allCoords = [];
await axios
  .get("/api/fetch-coords")
  .then((res) => {
    const allUserCoords = res.data.allUserCoords;
    allCoords = allUserCoords
      .filter((userCoords) => userCoords.lat != null && userCoords.lon != null)
      .map((userCoords) => [userCoords?.lat, userCoords?.lon]);
    console.log(allCoords);
  })
  .catch((error) => {
    console.log(`Error in fetching, ${error}`);
  });

const Map = () => {
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
        <a href="https://react-leaflet.js.org/" className="underline text-blue-400">React Leaflet</a> and{" "}
        <a href="https://ipapi.co/" className="underline text-blue-400">ipapi.co</a>.
      </p>

      <MapContainer
        center={[20, 73]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "90%" }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {allCoords.map((position) => (
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default Map;
