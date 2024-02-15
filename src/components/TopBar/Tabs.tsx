"use client"
import { useState } from "react"

export function Tabs() {
    const [selectedTab, setSelectedTab] = useState(0)
    const tabs = ["Overview", "Dashboard"]

    return (
        <div className={styles.root}>
            {tabs.map((title, index) => {
                const underline = selectedTab === index ?
                    "border-b-2 border-white"
                    : "border-b-2 border-transparent"

                return (
                    <button key={`button_${index}`}
                        className={`transform ease-in-out duration-500 ${underline}`}
                        onClick={() => setSelectedTab(index)}
                    >
                        {title}
                    </button>
                )
            })}
        </div>
    )
}

const styles = {
    root: "flex gap-4 text-white text-lg font-medium"
}