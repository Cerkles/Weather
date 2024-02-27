import { FaEarthAmericas } from "react-icons/fa6";

export const GeneralInfo = ({ data }: any) => {

    console.log(data)

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <FaEarthAmericas />
                </div>
                <h1>General Information</h1>
            </div>
            <p>name {data?.location.name}</p>
            <p>region {data?.location.region}</p>
            <p>country {data?.location.country}</p>
            <p>time {data?.location.localtime}</p>
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