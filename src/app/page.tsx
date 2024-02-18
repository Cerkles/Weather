"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Topbar } from "@/components/top-bar/Topbar"

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
