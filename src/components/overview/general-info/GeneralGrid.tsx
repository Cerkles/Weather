import { ForecastWeather } from "@/types/forecast-weather"
import { ValueBar } from "./ValueBar"

export const GeneralGrid: React.FC<{ data: ForecastWeather }> = ({ data }) => {

    const visibiltyPercent = () => {
        return (data?.current.vis_miles / 6) * 100
    }
    const pressurePercent = () => {
        return ((data?.current.pressure_in - 25) / 7) * 100
    }

    return (
        <div className={styles.grid}>
            <div className={styles.item}>
                <p>Humidity</p>
                <p>{data?.current.humidity}%</p>
                <ValueBar percent={data?.current.humidity} location={data?.location.name}/>
            </div>
            <div className={styles.item}>
                <p>Cloudiness</p>
                <p>{data?.current.cloud}%</p>
                <ValueBar percent={data?.current.cloud} location={data?.location.name}/>
            </div>
            <div className={styles.item}>
                <p>Pressure</p>
                <p>{data?.current.pressure_in}inHg</p>
                <ValueBar percent={pressurePercent()} location={data?.location.name}/>
            </div>
            <div className={styles.item}>
                <p>Visibility</p>
                <p>{data?.current.vis_miles}mi</p>
                <ValueBar percent={visibiltyPercent()} location={data?.location.name}/>
            </div>
        </div>
    )
}

const styles = {
    grid: "grid grid-flow-row grid-cols-2 grid-rows-2 gap-x-2 gap-y-6 my-6 ",
    item: "flex flex-col justify-center items-center",
    progressBar: "relative w-1/2 h-2 rounded-lg overflow-hidden",
    barBackground: "absolute top-0 left-0 bg-slate-400 h-full w-full",
    bar: "absolute top-0 left-0 bg-white h-full",
}