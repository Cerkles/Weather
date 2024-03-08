import { FaEarthAmericas } from "react-icons/fa6";
import { ForecastWeather } from "@/types/forecast-weather";
import { formatDate, formatTime } from "@/utils/shared-utils/format-dates";
import { GeneralGrid } from "./GeneralGrid";

type Props = {
    data: ForecastWeather;
}

export const GeneralInfo: React.FC<Props> = ({ data }) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <FaEarthAmericas />
                </div>
                <h1>General</h1>
            </div>
            <div className={`${styles.background} ${data?.current?.is_day ? styles.day : styles.night}`}>
                <div className={styles.location}>
                    <div>
                        <h1>{data?.location?.name}, {data?.location?.region}</h1>
                        <h1>{data?.location?.country}</h1>
                    </div>
                    <h1 className={styles.time}>{formatTime(data?.location?.localtime)}</h1>
                </div>
                <p className={styles.date}>{formatDate(data?.location?.localtime)}</p>
                <div className={styles.temperatures}>
                    <p className={styles.temp}>{(data?.current?.temp_f)?.toFixed(0)}°</p>
                    <p>Feels like {(data?.current?.feelslike_f)?.toFixed(0)}°</p>
                </div>
                <div className={styles.condition}>
                    <img src={data?.current?.condition.icon}
                        alt={`${data?.current?.condition.text}`}
                        className={styles.img} />
                    <p>{data?.current?.condition.text}</p>
                </div>
                <GeneralGrid data={data} />
            </div>
        </div>
    )
}

const styles = {
    root: "h-full flex flex-col",
    header: "p-2 flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1",
    background: "mt-2 rounded-b-lg p-4 flex-1 border-t-4 border-double border-white text-white",
    day: "bg-gradient-to-b from-sky-600 to-sky-400",
    night: "bg-gradient-to-b from-sky-950 to-sky-800",
    location: "font-medium text-lg flex justify-between",
    time: "text-right",
    date: "",
    temperatures: "flex flex-col justify-center items-center mt-16 mb-4",
    temp: "text-7xl",
    condition: "flex gap-2 ml-[-2rem] justify-center items-center",
    img: "w-[2rem] h-[2rem]",
    info: "absolute bottom-2 right-2 left-2 bg-white rounded-lg p-2 text-slate-500 overflow-hidden text-wrap",
};