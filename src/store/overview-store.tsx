"use client"
import { create } from 'zustand'
import { CurrentWeather } from '@/types/current-weather'
import { ForecastWeather } from '@/types/forecast-weather'

type OverviewStore = {
    location: number;
    selectLocation: (index: number) => void;
    currentData: CurrentWeather[];
    setCurrentData: (currentData: CurrentWeather[]) => void;
    forecastData: ForecastWeather[];
    setForecastData: (currentData: ForecastWeather[]) => void;
}

export const useOverviewStore = create<OverviewStore>((set) => ({
    location: 0,
    selectLocation: (index) => set((state) => ({location: state.location = index})),
    currentData: [],
    setCurrentData: (data) => set((state) => ({ currentData: state.currentData = data })),
    forecastData: [],
    setForecastData: (data) => set((state) => ({ forecastData: state.forecastData = data }))
}))