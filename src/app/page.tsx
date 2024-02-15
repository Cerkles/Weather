"use client"
import { Topbar } from "@/components/TopBar/Topbar"
import { useStore } from "@/store/store"

export default function Home() {
  const tab = useStore((state) => state.tab)

  return (
    <>
      <Topbar />
      {tab === 0 ?
        (<div>Overview</div>) 
        : 
        (<div>Dashboard</div>)}
    </>
  )
}
