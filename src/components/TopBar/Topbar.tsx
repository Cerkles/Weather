import { SiteLogo } from "./SiteLogo"
import { Tabs } from "./Tabs"
import { WelcomeUser } from "./WelcomeUser"

export function Topbar() {
    return (
        <div className={styles.root}>
            <SiteLogo />
            <Tabs />
            <WelcomeUser />
        </div>
    )
}

const styles = {
    root: "bg-sky-500 border-b-4 border-zinc-300 flex justify-between py-4 px-6 cursor-default",
    text: "text-white text-lg font-medium text-center"
}