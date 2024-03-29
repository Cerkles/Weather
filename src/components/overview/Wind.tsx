import { WiStrongWind } from "react-icons/wi";
import { ForecastWeather } from "@/types/forecast-weather";

export const Wind: React.FC<{ data: ForecastWeather }> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <WiStrongWind />
                </div>
                <h1>Wind</h1>
            </div>
            <p>gust_mph {data?.current?.gust_mph}</p>
            <p>wind degree {data?.current?.wind_degree}</p>
            <p>wind direction {data?.current?.wind_dir}</p>
            <p>wind_mph {data?.current?.wind_mph}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}