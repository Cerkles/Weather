"use client"
import { useStore } from "@/store/store"

export function Tabs() {
    const tabs = ["Overview", "Dashboard"]
    const tab = useStore((state) => state.tab)
    const selectTab = useStore((state)=> state.selectTab)

    return (
        <div className={styles.root}>
            {tabs.map((title, index) => {
                const underline = tab === index ?
                    "border-b-2 border-white"
                    : "border-b-2 border-transparent"

                return (
                    <button key={`button_${index}`}
                        className={`transform ease-in-out duration-500 ${underline}`}
                        onClick={() => selectTab(index)}
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