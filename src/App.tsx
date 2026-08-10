import { useQuery } from "@tanstack/react-query"
import { getGeoCode, getWeather } from "./api"

import { DailyForecast } from "./components/cards/DailyForecast"
import { HourlyForecast } from "./components/cards/HourlyForecast"
import { CurrentWeather } from "./components/cards/CurrentWeather"
import { AdditionalInfo } from "./components/cards/AdditionalInfo"
import { Map } from "./components/Map"
import { useState } from "react"
import type {Coords}  from "./types"
import { LocationDropdown } from "./components/dropdown/LocationDropdown"
import { MapTypeDropdown } from "./components/dropdown/MapTypeDropdown"
function App() {
  const onMapClick = (lat:number , lon:number) => {
    setCoords({lat,lon})
    setLocation('custom')
  }
  
  const [coordinates,setCoords] = useState<Coords>({lat:10,lon:25})
  const [location,setLocation] = useState<string | null>("Tokyo")
  const [mapType , setMapType] = useState<string | null>('clouds_new')
  const {data} = useQuery({
    queryKey:['geocode',location],
    queryFn: () => getGeoCode(location)
  })
  const coords = location==='custom' ? coordinates : {lat: data?.[0].lat ?? 0 , lon:data?.[0].lon ?? 0}
  return (
    <>
    <div className="flex flex-col gap-8">
     {/* {JSON.stringify(data)} */}
     <div className="flex gap-8">
      <div className="flex gap-4">
        <h1 className="text-2xl font-semibold">Location:</h1>
     <LocationDropdown location={location} setLocation={setLocation}/>
     </div>
     <div className="flex gap-4">
      <h1 className="text-2xl font-semibold">Map Type:</h1>
     <MapTypeDropdown mapType={mapType} setmapType={setMapType}/>
     </div>
     </div>
     <Map coords={coords} onMapClick={onMapClick} mapType={mapType}/>
     <CurrentWeather coords={coords}/>
     <HourlyForecast coords={coords}/>
     <DailyForecast coords={coords}/>
     <AdditionalInfo coords={coords}/>
     </div>
    </>
  )
}

export default App
