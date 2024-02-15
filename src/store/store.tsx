"use client"
import { create } from 'zustand'

type Store = {
    tab: number;
    selectTab: (index: number) => void
}

export const useStore = create<Store>((set) => ({
    tab: 0,
    selectTab: (index) => set((state) => ({tab: state.tab = index}))
}))