import { LocationsSkeleton } from "./LocationsSkeleton"

export function OverviewSkeleton() {

    return (
        <div>
            <LocationsSkeleton />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.left}></div>
                    
                </div>

            </div>
            
        </div>
    )

}

const styles = {
    content: "flex items-center justify-center",
    container: "h-5/6 w-full bg-slate-100 mb-6 mx-6 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
    left: "animate-pulse h-[80vh] w-[30vw] bg-white m-4 rounded-lg drop-shadow-md"
}