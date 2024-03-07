import { FaEarthAmericas } from "react-icons/fa6";
import { ForecastWeather } from "@/types/forecast-weather";
import { formatDate, formatTime } from "@/utils/shared-utils/format-dates";

export const GeneralInfo: React.FC<{ data: ForecastWeather }> = ({ data }) => {
    console.log(data)

    const visibiltyPercent = () => {
        return (data?.current.vis_miles / 6) * 100
    }
    const pressurePercent = () => {
        return ((data?.current.pressure_in - 25) / 7) * 100
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <FaEarthAmericas />
                </div>
                <h1>General</h1>
            </div>
            <div className={`${styles.background} ${data?.current.is_day ? styles.day : styles.night}`}>
                <div className={styles.location}>
                    <div>
                        <h1>{data?.location.name}, {data?.location.region}</h1>
                        <h1>{data?.location.country}</h1>
                    </div>
                    <h1>{formatTime(data?.location.localtime)}</h1>
                </div>
                <p className={styles.date}>{formatDate(data?.location.localtime)}</p>
                <div className={styles.temperatures}>
                    <p className={styles.temp}>{data?.current.temp_f}°</p>
                    <p>Feels like {data?.current.feelslike_f}°</p>
                </div>
                <div className={styles.condition}>
                    <img src={data?.current.condition.icon}
                        alt={`${data?.current.condition.text}`}
                        className={styles.img} />
                    <p>{data?.current.condition.text}</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.item}>
                        <p>Humidity</p>
                        <p>{data?.current.humidity}%</p>
                        <div className={styles.progressBar}>
                            <div className={styles.barBackground} />
                            <div className={styles.bar} style={{ width: `${data?.current.humidity}%` }} />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p>Cloudiness</p>
                        <p>{data?.current.cloud}%</p>
                        <div className={styles.progressBar}>
                            <div className={styles.barBackground} />
                            <div className={styles.bar} style={{ width: `${data?.current.cloud}%` }} />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p>Pressure</p>
                        <p>{data?.current.pressure_in}inHg</p>
                        <div className={styles.progressBar}>
                            <div className={styles.barBackground} />
                            <div className={styles.bar} style={{ width: `${pressurePercent()}%` }} />
                        </div>
                    </div>
                    <div className={styles.item}>
                        <p>Visibility</p>
                        <p>{data?.current.vis_miles}mi</p>
                        <div className={styles.progressBar}>
                            <div className={styles.barBackground} />
                            <div className={styles.bar} style={{ width: `${visibiltyPercent()}%` }} />
                        </div>
                    </div>
                </div>
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
    date: "",
    temperatures: "flex flex-col justify-center items-center mt-16 mb-4",
    temp: "text-7xl",
    condition: "flex gap-2 ml-[-2rem] justify-center items-center",
    img: "w-[2rem] h-[2rem]",
    grid: "grid grid-flow-row grid-cols-2 grid-rows-2 gap-x-2 gap-y-6 my-6 ",
    item: "flex flex-col justify-center items-center",
    progressBar: "relative w-1/2 h-2 rounded-lg overflow-hidden",
    barBackground: "absolute top-0 left-0 bg-slate-400 h-full w-full",
    bar: "absolute top-0 left-0 bg-white h-full",
};