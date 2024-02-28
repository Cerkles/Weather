import { HiSun } from "react-icons/hi2";
import { ForecastWeather } from "@/types/forecast-weather";

export const Ultraviolet: React.FC<{ data: ForecastWeather }> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <HiSun />
                </div>
                <h1>Ultraviolet</h1>
            </div>
            <p>uv {data?.current?.uv}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}