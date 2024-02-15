
export function SiteLogo() {

    return (
        <div className={styles.root}>
            <p className={styles.text}>{"How's the Weather?"}</p>
        </div>
    )
}

const styles = {
    root: "flex text-white",
    text: "text-lg font-medium"
}
