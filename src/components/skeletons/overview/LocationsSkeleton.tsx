import { guestLocations } from "@/guest-data/guest-locations"
import { FiCloud } from "react-icons/fi";

export function LocationsSkeleton() {

    return (
        <div className={styles.root}>
            {guestLocations.map((location, index) => {
                return (
                    <button key={`location_${index}`}
                        className={`${styles.location} ${styles.button} ${styles.other}`}
                        >

                        <p className={styles.text}>{location.city}</p>
                        <div className={`${styles.icon} ${styles.otherIcon}`}>
                            <FiCloud />
                        </div>

                    </button>
                )
            })}
        </div>
    )

}

const styles = {
    root: "flex ml-4",
    location: "flex items-center mx-2 my-4 pl-1 rounded-full",
    button: "border-b-2 drop-shadow-md",
    text: "px-2 text-transparent",
    icon: "flex items-center p-1 h-full bg-white border-2 rounded-full",
    other: "animate-pulse bg-slate-300 border-slate-400",
    otherIcon: "animate-pulse text-slate-300 border-slate-300",
}