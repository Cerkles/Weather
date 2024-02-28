import { CurrentReturn } from "./current-weather";
import { LocationReturn } from "./current-weather";
import { AirQualityReturn } from "./current-weather";
import { ConditionReturn } from "./current-weather";

type Alert = []

type Alerts = {
    alert: Alert;
}

export type AstroReturn = {
    is_moon_up: number;
    is_sun_up: number;
    moon_illumination: number;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

type DayReturn = {
    air_quality: AirQualityReturn;
    avghumidity: number;
    avgtemp_c: number;
    avgtemp_f: number;
    avgvis_km: number;
    avgvis_miles: number;
    condition: ConditionReturn;
    daily_chance_of_rain: number;
    daily_chance_of_snow: number;
    daily_will_it_rain: number;
    daily_will_it_snow: number;
    maxtemp_c: number;
    maxtemp_f: number;
    maxwind_kph: number;
    maxwind_mph: number;
    mintemp_c: number;
    mintemp_f: number;
    totalprecip_in: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    uv: number;
}

export type HourReturn = {
    air_quality: AirQualityReturn;
    chance_of_rain: number;
    chance_of_snow: number;
    cloud: number;
    condition: ConditionReturn
    dewpoint_c: number;
    dewpoint_f: number;
    diff_rad: number;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    gust_mph: number;
    heatindex_c: number;
    heatindex_f: number;
    humidity: number;
    is_day: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    short_rad: number;
    snow_cm: number;
    temp_c: number;
    temp_f: number;
    time: string;
    time_epoch: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    will_it_rain: number;
    will_it_snow: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
    windchill_c: number;
    windchill_f: number;
}

type Day = {
    astro: AstroReturn;
    date: string;
    date_epoch: number;
    day: DayReturn;
    hour: HourReturn;
}

type Forecastday = {
    forecastday: Day[]
}

export type ForecastWeather = {
    alerts: Alerts;
    current: CurrentReturn;
    forecast: Forecastday;
    location: LocationReturn;
}
