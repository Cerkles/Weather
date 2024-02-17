"use client"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Topbar } from "@/components/TopBar/Topbar"

export default function Home() {
  const router = useRouter()
    
  useEffect(() => {
    router.push("/overview")
  }, [router])
  

  return (
    <>
      <Topbar />
    </>
  )
}
