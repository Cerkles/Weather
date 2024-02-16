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
    root: "bg-gradient-to-b from-sky-500 to-sky-600 border-b-4 border-zinc-300 flex justify-between py-4 px-6 cursor-default",
} 