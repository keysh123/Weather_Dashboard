import React from "react";

import { Skeleton } from "../ui/skeleton";
import { Card } from "../cards/Card";

type Props = {};

export const HourlySkeleton = ({}: Props) => {
  return (
    <Card
      title="Hourly Forecast (48 hours)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center p-2"
        >
          {/* Time */}
          <Skeleton className="w-12 h-5" />

          {/* Weather icon */}
          <Skeleton className="w-7 h-7 rounded-full" />

          {/* Temperature */}
          <Skeleton className="w-12 h-5" />
        </div>
      ))}
    </Card>
  );
};

export default HourlySkeleton;