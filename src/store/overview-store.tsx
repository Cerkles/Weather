"use client"
import { create } from 'zustand'
import { CurrentWeather } from '@/types/current-weather'

type OverviewStore = {
    location: number;
    selectLocation: (index: number) => void;
    data: CurrentWeather[];
    setData: (currentData: CurrentWeather[]) => void;
}

export const useOverviewStore = create<OverviewStore>((set) => ({
    location: 0,
    selectLocation: (index) => set((state) => ({location: state.location = index})),
    data: [],
    setData: (currentData) => set((state) => ({ data: state.data = currentData }))
}))