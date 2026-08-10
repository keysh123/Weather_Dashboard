const API_KEY = import.meta.env.VITE_API_KEY

import { GeocodeSchema } from "./schemas/geoCodeSchema";
// // export async function getWeather({lat,lon} : {lat :number , lon : number}){
// //     const result = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`);
// //     const data = await result.json();
// //     return data;
// // }

// // &current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&

// export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
//   const result = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&temperature_unit=fahrenheit&timezone=auto`
//   );

//   if (!result.ok) {
//     throw new Error("Failed to fetch weather data");
//   }

//   return result.json();
// }

// import { WeatherResponseSchema } from "./schemas/weatherSchema";

// export async function getWeather({
//   lat,
//   lon,
// }: {
//   lat: number;
//   lon: number;
// }) {
//   const result = await fetch(
//     `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&temperature_unit=fahrenheit&timezone=auto`
//   );

//   if (!result.ok) {
//     throw new Error("Failed to fetch weather");
//   }

//   const data = await result.json();

//   return WeatherResponseSchema.parse(data);
// }

import { WeatherResponseSchema } from "./schemas/weatherSchema";

export async function getWeather({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  const result = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,cloud_cover,surface_pressure&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&temperature_unit=fahrenheit&timezone=auto`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await result.json();

  return WeatherResponseSchema.parse(data);
}
export async function getGeoCode(
  location
: 
  string | null
) {
  const result = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch weather");
  }

  const data = await result.json();

  return GeocodeSchema.parse(data);
}