"use client"
import { useStore } from "@/store/store"
import Link from "next/link"
import { FaCloud } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const Tabs = () => {
    const selectedTab = useStore((state) => state.tab)
    const selectTab = useStore((state) => state.selectTab)
    const tabs = [
        { icon: <FaCloud />, title: "Overview", link: "/overview" },
        { icon: <MdDashboard />, title: "Dashboard", link: "/dashboard" }
    ]

    return (
        <div className={styles.root}>
            {tabs.map((tab, index) => {
                const underline = selectedTab === index ?
                    "border-b-2 border-white"
                    : "border-b-2 border-transparent"

                return (
                    <Link key={`button_${index}`}
                        className={`${styles.tab} ${underline}`}
                        onClick={() => selectTab(index)}
                        href={tab.link}
                    >
                        <div>{tab.icon}</div>
                        <p>{tab.title}</p>
                    </Link>
                )
            })}
        </div>
    )
}

const styles = {
    root: "flex gap-4 text-white text-lg font-medium",
    tab: "flex items-center gap-2 transform ease-in-out duration-500"
}