import { GiMoon } from "react-icons/gi";

export const Astrological = ({data} : any) => {

    console.log(data)

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.icon}>
            <GiMoon />
                </div>
                <h1>Astrological</h1>
            </div>
        </div>
    )
}

const styles = {
    root: "p-2",
    header: "flex items-center gap-2 font-medium",
    icon: "bg-sky-500 border-4 border-double border-white rounded-lg text-white p-1"
}