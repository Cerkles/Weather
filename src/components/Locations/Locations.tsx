import { guestLocations } from "@/guest-data/guest-locations"
import { FiCloud } from "react-icons/fi";



export function Locations() {

    return (
        <div className={styles.root}>
            {guestLocations.map((location, index) => {
                return (
                    <button key={`location_${index}`}
                        className={styles.location}>
                        <p className={styles.text}>{location.city}</p>
                        <div className={styles.icon}><FiCloud /></div>
                    </button>
                )
            })}
            <button className={styles.add}>
                <p>+</p>
            </button>
        </div>
    )

}

const styles = {
    root: "flex",
    location: "flex items-center mx-2 my-4 bg-sky-500 rounded-full hover:scale-110 drop-shadow-md",
    text: "px-2 text-white",
    icon: "flex items-center text-sky-500 bg-white border-2 border-sky-500 rounded-full h-full p-2",
    add: "bg-sky-500 text-white mx-2 my-4 px-3 rounded-full hover:scale-110 drop-shadow-md",
}