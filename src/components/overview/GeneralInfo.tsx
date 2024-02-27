import { FaEarthAmericas } from "react-icons/fa6";
import { ForecastWeather } from "@/types/forecast-weather";

export const GeneralInfo: React.FC<{ data: ForecastWeather }> = ({ data }) => {

    console.log(data)

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <FaEarthAmericas />
                </div>
                <h1>General</h1>
            </div>
            <h1>{data?.location.name}, {data?.location.region}</h1>
            <h1>{data?.location.country}</h1>
            <p>{data?.location.localtime}</p>
            <p>temp_f {data?.current.temp_f}</p>
            <p>feelslike_f {data?.current.feelslike_f}</p>
            <p>is_day {data?.current.is_day}</p>
            <p>humidity {data?.current.humidity}</p>
            <p>visibility {data?.current.vis_miles}</p>
            <p>cloud {data?.current.cloud}</p>
            <p>pressure_in {data?.current.pressure_in}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}