import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

import type { Coords } from "../types";

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  mapType: string | null;
};

const API_KEY = import.meta.env.VITE_API_KEY;
const MAP_TILER_API_KEY = import.meta.env.VITE_MAP_TILER_API_KEY;

export const Map = ({
  coords,
  onMapClick,
  mapType,
}: Props) => {
  const { lat, lon } = coords;

  return (
    <MapContainer
      className="z-0"
      center={[lat, lon]}
      zoom={5}
      style={{ height: "500px", width: "1000px" }}
    >
      {/* MapTiler base map */}
      <MapTileLayer />

      {/* OpenWeather weather overlay */}
      {mapType && (
        <TileLayer
          opacity={0.7}
          url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
        />
      )}

      <Marker position={[lat, lon]} />

      <MapClick
        onMapClick={onMapClick}
        coords={coords}
      />
    </MapContainer>
  );
};

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
}) {
  const map = useMap();

  useEffect(() => {
    map.panTo([coords.lat, coords.lon]);
  }, [map, coords]);

  useEffect(() => {
    const handleClick = (e: any) => {
      const { lat, lng } = e.latlng;

      onMapClick(lat, lng);
    };

    map.on("click", handleClick);

    return () => {
      map.off("click", handleClick);
    };
  }, [map, onMapClick]);

  return null;
}

function MapTileLayer() {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "basic-dark",
      apiKey: MAP_TILER_API_KEY,
    });

    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
}