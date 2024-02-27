import { WiTime2 } from "react-icons/wi";
import { HourReturn } from "@/types/forecast-weather";

export const HourlyForecast: React.FC<{ data: HourReturn }> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <WiTime2 />
                </div>
                <h1>Hourly Forecast</h1>
            </div>

        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}