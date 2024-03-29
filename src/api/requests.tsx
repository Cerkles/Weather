import { key } from "./key"
const url = "http://api.weatherapi.com/v1/"

export async function getCurrentData(latitude:string, longitude:string) {
    const call = `${url}current.json?key=${key}&q=${latitude},${longitude}&aqi=yes`
    const response = await fetch(call)
    const data = await response.json()
    return data
}

export async function getForecastData(latitude:string, longitude:string) {
    const call = `${url}forecast.json?key=${key}&q=${latitude},${longitude}&aqi=yes&alerts=yes`
    const response = await fetch(call)
    const data = await response.json()
    return data
}

export async function getSearchLocation(location: string) {
    const call = `${url}search.json?key=${key}&q=${location}`
    const response = await fetch(call)
    const data = await response.json()
    return data
}
