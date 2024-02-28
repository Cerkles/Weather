import { WiRaindrop } from "react-icons/wi";
import { ForecastWeather } from "@/types/forecast-weather";

export const Precipitation: React.FC<{ data: ForecastWeather}> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <WiRaindrop />
                </div>
                <h1>Precipitation</h1>
            </div>
            <p>precip {data?.current?.precip_in}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}