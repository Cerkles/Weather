
export function WelcomeUser () {

    return (
        <div className={styles.root}>
            <div className={`${styles.letter} ${styles.text}`}>G</div>
            <h1 className={styles.text}>Welcome Guest!</h1>
        </div>
    )
}

const styles = {
    root: "flex gap-2 items-center",
    letter: "flex justify-center items-center bg-zinc-600 rounded-full h-6 w-6 cursor-pointer transition ease-in-out duration-500 hover:bg-yellow-300 hover:scale-125",
    text: "text-white text-lg font-medium",
}