import { useSuspenseQuery } from "@tanstack/react-query";
import React from "react";
import { getWeather } from "../../api";
import { Card } from "./Card";
import { getWeatherDescription, getWeatherIcon } from "../../utils/HelperFunctions";
import type { Coords } from "../../types";


type Props = {
    coords:Coords
};

export const CurrentWeather = ({coords}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather" , coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  const localTime = new Intl.DateTimeFormat("en-US", {
    timeZone: data.timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(data.current.time));

  return (
    <Card title="Current Weather">
      <div className="flex flex-col gap-6 items-center">

        {/* Current temperature */}
        <div className="flex flex-col items-center">
          <p className="text-5xl font-semibold">
            {Math.round(data.current.temperature_2m)}°F
          </p>

          {/* Weather icon */}
          <div className="text-3xl">
            {getWeatherIcon(data.current.weather_code)}
          </div>
        </div>

        {/* Weather description */}
        <p className="text-xl">
          {getWeatherDescription(data.current.weather_code)}
        </p>

        {/* Local time */}
        <div className="flex flex-col gap-2">
          <p className="text-xl text-center text-gray-500">
            Local time:
          </p>

          <h3 className="text-4xl font-semibold text-center">
            {localTime}
          </h3>
        </div>

        {/* Weather details */}
        <div className="flex justify-between w-full">

          {/* Feels Like */}
          <div className="flex flex-col gap-2 items-center">
            <p className="text-gray-500">Feels Like</p>
            <p>
              {Math.round(data.current.apparent_temperature)}°F
            </p>
          </div>

          {/* Humidity */}
          <div className="flex flex-col gap-2 items-center">
            <p className="text-gray-500">Humidity</p>
            <p>
              {data.current.relative_humidity_2m}%
            </p>
          </div>

          {/* Wind */}
          <div className="flex flex-col gap-2 items-center">
            <p className="text-gray-500">Wind</p>
            <p>
              {data.current.wind_speed_10m} km/h
            </p>
          </div>

        </div>
      </div>
    </Card>
  );
};