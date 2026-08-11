import React from "react";

import { Skeleton } from "../ui/skeleton";
import { Card } from "../cards/Card";

type Props = {};

export const DailySkeleton = ({}: Props) => {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center"
        >
          {/* Weekday */}
          <Skeleton className="w-9 h-5" />

          {/* Weather icon */}
          <Skeleton className="w-6 h-6 rounded-full" />

          {/* Average */}
          <Skeleton className="w-12 h-5" />

          {/* Min */}
          <Skeleton className="w-12 h-5" />

          {/* Max */}
          <Skeleton className="w-12 h-5" />
        </div>
      ))}
    </Card>
  );
};