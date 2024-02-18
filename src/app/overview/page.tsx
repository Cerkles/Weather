import { Topbar } from "@/components/top-bar/Topbar";
import { Locations } from "@/components/overview/Locations";

export default function Overview() {

    return (
        <>
            <Topbar />
            <Locations />
            <div className={styles.content}>
                <div className={styles.container}>
                    Overview
                </div>

            </div>
        </>
    )
}

const styles = {
    content: "flex items-center justify-center",
    container: "h-full w-full bg-white mb-6 mx-6 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
}
