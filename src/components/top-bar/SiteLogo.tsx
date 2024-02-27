import { RiCloudFill } from "react-icons/ri";

export const SiteLogo = () => {

    return (
        <div className={styles.root}>
            <div className={styles.cloud}>
                <RiCloudFill />
            </div>
            <p className={styles.text}>{"How's the Weather?"}</p>
        </div>
    )
}

const styles = {
    root: "flex items-center text-white",
    cloud: "scale-150",
    text: "px-2 text-xl font-medium"
}
