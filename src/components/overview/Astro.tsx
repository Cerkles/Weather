import { GiMoon } from "react-icons/gi";
import { AstroReturn } from "@/types/forecast-weather";

export const Astro: React.FC<{ data: AstroReturn }> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
            <GiMoon />
                </div>
                <h1>Celestial</h1>
            </div>
            <p>{data.is_moon_up}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}