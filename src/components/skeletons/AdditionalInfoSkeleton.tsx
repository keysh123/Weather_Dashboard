import React from "react";

import { Skeleton } from "../ui/skeleton";
import { Card } from "../cards/Card";

type Props = {};

export const AdditionalInfoSkeleton = ({}: Props) => {
  return (
    <Card
      title="Additional Weather Info"
      childrenClassName="flex flex-col gap-8"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex justify-between items-center"
        >
          {/* Icon + label */}
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 rounded-full" />
            <Skeleton className="w-28 h-5" />
          </div>

          {/* Value */}
          <Skeleton className="w-16 h-5" />
        </div>
      ))}
    </Card>
  );
};