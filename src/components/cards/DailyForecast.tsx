import React from "react";
import { Card } from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import { getWeatherIcon } from "../../utils/HelperFunctions";
import type { Coords } from "../../types";

type Props = {
    coords:Coords
};


export const DailyForecast = ({coords}: Props) => {
    const { data } = useSuspenseQuery({
        queryKey: ["weather",coords],
        queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
    });

    return (
        <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
           
                {data.daily.time.map((date, index) => {
                    const min = data.daily.temperature_2m_min[index];
                    const max = data.daily.temperature_2m_max[index];

                    const avg = ((min + max) / 2).toFixed(0);
                    const dayName = new Date(date).toLocaleDateString("en-US", {
                        weekday: "short",
                    });

                    return (
                        <div
                            key={date}
                            className="flex justify-between items-center"
                        >
                            <p className="w-9">{dayName}</p>

                            {/* <img src="" alt="weather" /> */}
                            <div className="text-xl">
                                {getWeatherIcon(data.current.weather_code)}
                            </div>
                            {/* Average */}
                            <p>{avg}°F</p>

                            {/* Min */}
                            <p className="text-gray-500">
                                {Math.round(min)}°F
                            </p>

                            {/* Max */}
                            <p className="text-gray-500">
                                {Math.round(max)}°F
                            </p>
                        </div>
                    );
                })}
          
        </Card>
    );
};