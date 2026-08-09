
import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type Props = {}

export const LocationDropdown = ({ }: Props) => {
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


        <Select items={locations} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
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
        </Select >
    )
}