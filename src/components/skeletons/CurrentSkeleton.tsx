import React from "react";
import { Card } from "../cards/Card";
import { Skeleton } from "../ui/skeleton";

type Props = {};

export const CurrentSkeleton = ({}: Props) => {
  return (
    <Card title="Current Weather">
      <div className="flex flex-col gap-6 items-center">

        {/* Current temperature */}
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="w-32 h-12" />
          <Skeleton className="w-20 h-6" />
        </div>

        {/* Weather description */}
        <Skeleton className="w-32 h-6" />

        {/* Local time */}
        <div className="flex flex-col gap-2 items-center">
          <Skeleton className="w-24 h-6" />
          <Skeleton className="w-48 h-10" />
        </div>

        {/* Weather details */}
        <div className="flex justify-between w-full">

          {/* Feels Like */}
          <div className="flex flex-col gap-2 items-center">
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-16 h-5" />
          </div>

          {/* Humidity */}
          <div className="flex flex-col gap-2 items-center">
            <Skeleton className="w-20 h-5" />
            <Skeleton className="w-12 h-5" />
          </div>

          {/* Wind */}
          <div className="flex flex-col gap-2 items-center">
            <Skeleton className="w-16 h-5" />
            <Skeleton className="w-20 h-5" />
          </div>

        </div>
      </div>
    </Card>
  );
};