import React, { type Dispatch, type SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {
  location: string | null;
  setLocation: Dispatch<SetStateAction<string | null>>;
};

export const LocationDropdown = ({
  location,
  setLocation,
}: Props) => {
  const locations = [
    { label: "Berlin", value: "Berlin" },
    { label: "London", value: "London" },
    { label: "Paris", value: "Paris" },
    { label: "New York", value: "New York" },
    { label: "Tokyo", value: "Tokyo" },
    { label: "Dubai", value: "Dubai" },
    { label: "Singapore", value: "Singapore" },
    { label: "Sydney", value: "Sydney" },
    { label: "Toronto", value: "Toronto" },
    { label: "Mumbai", value: "Mumbai" },
    { label: "Delhi", value: "Delhi" },
  ];

  return (
    <Select
      value={location}
      onValueChange={(value) => setLocation(value)}
      items={locations}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Location" />
      </SelectTrigger>

      <SelectContent className="z-[1001]">
        <SelectGroup>
          {locations.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};