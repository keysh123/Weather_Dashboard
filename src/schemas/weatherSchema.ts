import { z } from "zod";

export const CurrentWeatherSchema = z.object({
  time: z.string(),
  interval: z.number(),

  temperature_2m: z.number(),
  relative_humidity_2m: z.number(),
  apparent_temperature: z.number(),

  is_day: z.number(),
  weather_code: z.number(),

  wind_speed_10m: z.number(),

  // Additional weather information
  wind_direction_10m: z.number(),
  cloud_cover: z.number(),
  surface_pressure: z.number(),
});

export const HourlyWeatherSchema = z.object({
  time: z.array(z.string()),
  temperature_2m: z.array(z.number()),
  weather_code: z.array(z.number()),
});

export const DailyWeatherSchema = z.object({
  time: z.array(z.string()),
  weather_code: z.array(z.number()),

  temperature_2m_max: z.array(z.number()),
  temperature_2m_min: z.array(z.number()),

  sunrise: z.array(z.string()),
  sunset: z.array(z.string()),

  // UV index
  uv_index_max: z.array(z.number()),
});

export const WeatherResponseSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),

  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),

  timezone: z.string(),
  timezone_abbreviation: z.string(),

  elevation: z.number(),

  current_units: z.object({
    time: z.string(),
    interval: z.string(),

    temperature_2m: z.string(),
    relative_humidity_2m: z.string(),
    apparent_temperature: z.string(),

    is_day: z.string(),
    weather_code: z.string(),

    wind_speed_10m: z.string(),

    wind_direction_10m: z.string(),
    cloud_cover: z.string(),
    surface_pressure: z.string(),
  }),

  current: CurrentWeatherSchema,

  hourly_units: z.object({
    time: z.string(),
    temperature_2m: z.string(),
    weather_code: z.string(),
  }),

  hourly: HourlyWeatherSchema,

  daily_units: z.object({
    time: z.string(),
    weather_code: z.string(),

    temperature_2m_max: z.string(),
    temperature_2m_min: z.string(),

    sunrise: z.string(),
    sunset: z.string(),

    uv_index_max: z.string(),
  }),

  daily: DailyWeatherSchema,
});

export type WeatherResponse = z.infer<typeof WeatherResponseSchema>;