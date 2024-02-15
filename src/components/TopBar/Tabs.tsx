"use client"
import { useState } from "react"
import { FaCloud } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";



export function Tabs() {
    const [selectedTab, setSelectedTab] = useState(0)
    const tabs = [
        { icon: <FaCloud />, title: "Overview" },
        { icon: <MdDashboard />, title: "Dashboard" }
    ]

    return (
        <div className={styles.root}>
            {tabs.map((tab, index) => {
                const underline = selectedTab === index ?
                    "border-b-2 border-white"
                    : "border-b-2 border-transparent"

                return (
                    <button key={`button_${index}`}
                        className={`${styles.tab} ${underline}`}
                        onClick={() => setSelectedTab(index)}
                    >
                        <div>{tab.icon}</div>
                        <p>{tab.title}</p>
                    </button>
                )
            })}
        </div>
    )
}

const styles = {
    root: "flex gap-4 text-white text-lg font-medium",
    tab: "flex items-center gap-2 transform ease-in-out duration-500"
}