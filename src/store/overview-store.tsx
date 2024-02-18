"use client"
import { create } from 'zustand'

type OverviewStore = {
    location: number;
    selectLocation: (index: number) => void
}

export const useOverviewStore = create<OverviewStore>((set) => ({
    location: 0,
    selectLocation: (index) => set((state) => ({location: state.location = index}))
}))