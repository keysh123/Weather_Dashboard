import React from "react";
import { Card } from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeather } from "../../api";

import Sunrise from "../../assets/sunrise.svg?react";
import Sunset from "../../assets/sunset.svg?react";
import Cloud from "../../assets/cloud.svg?react";
import Uv from "../../assets/uv.svg?react";
import Wind from "../../assets/wind.svg?react";
import Pressure from "../../assets/pressure.svg?react";
import type { Coords } from "../../types";

type Props = {
    coords:Coords,
  
};


export const AdditionalInfo = ({coords}: Props) => {
  const { data } = useSuspenseQuery({
    queryKey: ["weather",coords],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <>
      <Card
        title="Additional Weather Info"
        childrenClassName="flex flex-col gap-8"
      >
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <div
              key={row.value}
              className="flex justify-between items-center"
            >
              <div className="flex items-center gap-2">
                <Icon className="w-5 h-5 invert" />
                <span className="text-gray-500">
                  {row.label}
                </span>
              </div>

              <span>
                <FormatComponent value={row.value} data={data} />
              </span>
            </div>
          );
        })}
      </Card>
    </>
  );
};

function FormatComponent({
  value,
  data,
}: {
  value: (typeof rows)[number]["value"];
  data: Awaited<ReturnType<typeof getWeather>>;
}) {
  switch (value) {
    case "clouds":
      return `${data.current.cloud_cover}%`;

    case "uvi":
      return data.daily.uv_index_max[0];

    case "wind_deg":
      return `${data.current.wind_direction_10m}°`;

    case "pressure":
      return `${Math.round(data.current.surface_pressure)} hPa`;

    case "sunrise":
      return new Date(data.daily.sunrise[0]).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

    case "sunset":
      return new Date(data.daily.sunset[0]).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });

    default:
      return null;
  }
}

const rows = [
  {
    label: "Cloudiness (%)",
    value: "clouds",
    icon: Cloud,
  },
  {
    label: "UV index",
    value: "uvi",
    icon: Uv,
  },
  {
    label: "Wind Direction",
    value: "wind_deg",
    icon: Wind,
  },
  {
    label: "Pressure (hPa)",
    value: "pressure",
    icon: Pressure,
  },
  {
    label: "Sunrise",
    value: "sunrise",
    icon: Sunrise,
  },
  {
    label: "Sunset",
    value: "sunset",
    icon: Sunset,
  },
] as const;