
import React, { type Dispatch, type SetStateAction } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

type Props = {
    mapType:string | null
    setmapType:Dispatch<SetStateAction<string | null>>
}

export const MapTypeDropdown = ({ mapType, setmapType}: Props) => {
    const mapTypes = [
        { label: "clouds", value: "clouds_new" },
        { label: "precipitation", value: "precipitation_new" },
        { label: "pressure", value: "pressure_new" },
        { label: "wind", value: "wind_new" },
        { label: "temp", value: "temp_new" },
    ];
    return (


        <Select value={mapType} onValueChange={(value)=>setmapType(value)} items={mapTypes} >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent className="z-[1001]">
                <SelectGroup>
                    {mapTypes.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select >
    )
}