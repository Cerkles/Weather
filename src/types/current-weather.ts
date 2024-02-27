export type AirQualityReturn = {
    co: number;
    "gb-defra-index": number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
    so2: number;
    "us-epa-index": number;
}

export type ConditionReturn = {
    code: number;
    icon: string;
    text: string;
}

export type CurrentReturn = {
    air_quality: AirQualityReturn;
    cloud: number;
    condition: ConditionReturn;
    feelslike_c: number;
    feelslike_f: number;
    gust_kph: number;
    humidity: number;
    is_day: number;
    last_updated: string;
    last_updated_epoch: number;
    precip_in: number;
    precip_mm: number;
    pressure_in: number;
    pressure_mb: number;
    temp_c: number;
    temp_f: number;
    uv: number;
    vis_km: number;
    vis_miles: number;
    wind_degree: number;
    wind_dir: string;
    wind_kph: number;
    wind_mph: number;
}

export type LocationReturn = {
    country: string;
    lat: number;
    localtime: string;
    localtime_epoch: number;
    lon: number;
    name: string;
    region: string;
    tz_id: string;
}

export type CurrentWeather = {
    current: CurrentReturn;
    location: LocationReturn;
}