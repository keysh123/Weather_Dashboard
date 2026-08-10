import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import type { Coords } from '../types';
type Props = {
  coords: Coords,
  onMapClick: (lat: number, lon: number) => void,
  mapType: string | null
};

const API_KEY = import.meta.env.VITE_API_KEY
export const Map = ({ coords, onMapClick ,mapType }: Props) => {
  const { lat, lon } = coords;

  return (
    <MapContainer className="z-0" center={[lat, lon]} zoom={5} style={{ height: '500px', width: '1000px' }} >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <TileLayer url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}/>
      <Marker position={[lat, lon]} />

    </MapContainer>
  )
}

function MapClick({ onMapClick , coords}: { onMapClick: (lat: number, lon: number) => void , coords:Coords}) {
  const map = useMap()
  map.panTo([coords.lat,coords.lon])
  map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    
    onMapClick(lat, lng)
  })
  return null;
}