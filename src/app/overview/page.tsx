"use client"
import { Topbar } from "@/components/top-bar/Topbar";
import { Locations } from "@/components/overview/Locations";
import { useOverviewStore } from "@/store/overview-store";

export default function Overview() {
    const data = useOverviewStore((state) => state.data)

    return (
        <>
            <Topbar />
            <Locations />
            <div className={styles.content}>
                <div className={styles.container}>

                </div>

            </div>
        </>
    )
}

const styles = {
    content: "flex items-center justify-center",
    container: "h-full w-full bg-slate-100 mb-6 mx-6 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
}
