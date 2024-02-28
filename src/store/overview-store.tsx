"use client"
import { create } from 'zustand'
import { CurrentWeather } from '@/types/current-weather'
import { ForecastWeather } from '@/types/forecast-weather'
import { guestLocations } from '@/guest-data/guest-locations';
import { Location } from '@/guest-data/guest-locations';

type OverviewStore = {
    location: number;
    selectLocation: (index: number) => void;
    currentData: CurrentWeather[];
    setCurrentData: (currentData: CurrentWeather[]) => void;
    forecastData: ForecastWeather[];
    setForecastData: (currentData: ForecastWeather[]) => void;
    editMode: boolean;
    setEditMode: (change: boolean) => void;
    locations: Location[];
    setLocations: (currentLocations: Location) => void;
}

export const useOverviewStore = create<OverviewStore>((set) => ({
    location: 0,
    selectLocation: (index) => set((state) => ({location: state.location = index})),
    currentData: [],
    setCurrentData: (data) => set((state) => ({ currentData: state.currentData = data })),
    forecastData: [],
    setForecastData: (data) => set((state) => ({ forecastData: state.forecastData = data })),
    editMode: false,
    setEditMode: (change) => set((state) => ({editMode: state.editMode = change})),
    locations: guestLocations, 
    setLocations: (currentLocations) => set((state) => ({locations: state.locations = currentLocations}))
}))