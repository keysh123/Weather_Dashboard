import React from "react";
import { Card } from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import { getWeatherIcon } from "../../utils/HelperFunctions";

type Props = {};

export const DailyForecast = (props: Props) => {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather({ lat: 50, lon: 50 }),
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