import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

import { DailyForecast } from "./components/cards/DailyForecast"
import { HourlyForecast } from "./components/cards/HourlyForecast"
import { CurrentWeather } from "./components/cards/CurrentWeather"
import { AdditionalInfo } from "./components/cards/AdditionalInfo"
import { Map } from "./components/Map"
import { useState } from "react"
import type {Coords}  from "./types"
import { LocationDropdown } from "./components/dropdown/LocationDropdown"
function App() {
  const onMapClick = (lat:number , lon:number) => {
    setCoords({lat,lon})
  }
  
  const [coords,setCoords] = useState<Coords>({lat:10,lon:25})
  return (
    <>
    <div className="flex flex-col gap-8">
     {/* {JSON.stringify(data)} */}
     <LocationDropdown/>
     <Map coords={coords} onMapClick={onMapClick}/>
     <CurrentWeather coords={coords}/>
     <HourlyForecast coords={coords}/>
     <DailyForecast coords={coords}/>
     <AdditionalInfo coords={coords}/>
     </div>
    </>
  )
}

export default App
