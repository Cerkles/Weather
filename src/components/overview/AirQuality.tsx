import { WiDust } from "react-icons/wi";

export const AirQuality = ({ data }: any) => {

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <WiDust />
                </div>
                <h1>Air Quality</h1>
            </div>
            <p>aqi {data["us-epa-index"]}</p>
            <p>co {data?.co}</p>
            <p>no2 {data?.no2}</p>
            <p>o3 {data?.o3}</p>
            <p>so2 {data?.so2}</p>
            <p>pm2.5 {data?.pm2_5}</p>
            <p>pm10 {data?.pm10}</p>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}