import { LocationsSkeleton } from "./LocationsSkeleton"

export function OverviewSkeleton() {

    return (
        <div>
            <LocationsSkeleton />
            <div className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.rowSpanThree} />
                    <div className={styles.colSpanTwo} />
                    <div className={styles.autoSpan} />
                    <div className={styles.autoSpan} />
                    <div className={styles.autoSpan} />
                    <div className={styles.autoSpan} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    content: "flex items-center justify-center",
    container: "h-[85vh] w-full grid grid-flow-col gap-3 bg-slate-100 mb-6 mx-6 p-2 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
    rowSpanThree: "animate-pulse row-span-3 bg-white rounded-lg drop-shadow-md",
    colSpanTwo: "animate-pulse col-span-2 bg-white rounded-lg drop-shadow-md",
    autoSpan: "animate-pulse bg-white rounded-lg drop-shadow-md"
}