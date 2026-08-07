import React from "react";
import { Card } from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";
import { getWeatherIcon } from "../../utils/HelperFunctions";

type Props = {};

export const HourlyForecast = ({ }: Props) => {
    const { data } = useSuspenseQuery({
        queryKey: ["weather"],
        queryFn: () => getWeather({ lat: 50, lon: 50 }),
    });

    return (
        <Card
            childrenClassName="flex gap-6 overflow-x-scroll"
            title="Hourly Forecast (48 hours)"
        >
            {data.hourly.time.slice(0, 48).map((time, index) => (
                <div
                    key={time}
                    className="flex flex-col gap-2 items-center p-2"
                >
                    <p className="whitespace-nowrap">
                        {new Date(time).toLocaleTimeString("en-GB", {
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </p>

                    <div className="text-xl">
                        {getWeatherIcon(data.hourly.weather_code[index])}
                    </div>

                    <p>
                        {Math.round(data.hourly.temperature_2m[index])}°F
                    </p>
                </div>
            ))}
        </Card>
    );
};