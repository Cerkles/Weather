"use client"
import { useState, useEffect } from "react";
import { Topbar } from "@/components/top-bar/Topbar";
import { OverviewSkeleton } from "@/components/skeletons/overview/OverviewSkeleton";
import { Locations } from "@/components/overview/Locations";
import { GeneralInfo } from "@/components/overview/general-info/GeneralInfo";
import { HourlyForecast } from "@/components/overview/HourlyForecast";
import { AirQuality } from "@/components/overview/AirQuality";
import { Wind } from "@/components/overview/Wind";
import { Precipitation } from "@/components/overview/Precipitation";
import { Ultraviolet } from "@/components/overview/Ultraviolet";
import { Astro } from "@/components/overview/Astro";
import { getForecastData } from "@/api/requests";
import { useOverviewStore } from "@/store/overview-store";

export default function Overview() {
    const [loading, setLoading] = useState(true)
    const selectedLocation = useOverviewStore((state) => state.location)
    const forecastData = useOverviewStore((state) => state.forecastData)
    const setForecastData = useOverviewStore((state) => state.setForecastData)
    const locations = useOverviewStore((state) => state.locations)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = locations.map(location =>
                    getForecastData(location.latitude, location.longitude)
                );
                const data = await Promise.all(promises);
                setForecastData(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [locations]);

    return (
        <>
            <Topbar />
            {loading ?
                <OverviewSkeleton />
                :
                (
                    <div>
                        <Locations />
                        <div className={styles.content}>
                            <div className={styles.container}>
                                <div className={`${styles.rowSpanThree} ${styles.card}`}>
                                    <GeneralInfo data={forecastData[selectedLocation]} />
                                </div>
                                <div className={`${styles.colSpanThree} ${styles.card}`}>
                                    <HourlyForecast data={forecastData[selectedLocation]?.forecast?.forecastday[0]?.hour} />
                                </div>
                                <div className={`${styles.colSpanTwo} ${styles.card}`}>
                                    <AirQuality data={forecastData[selectedLocation]?.current?.air_quality} />
                                </div>
                                <div className={`${styles.autoSpan} ${styles.card}`}>
                                    <Wind data={forecastData[selectedLocation]} />
                                </div>
                                <div className={`${styles.autoSpan} ${styles.card}`}>
                                    <Precipitation data={forecastData[selectedLocation]} />
                                </div>
                                <div className={`${styles.autoSpan} ${styles.card}`}>
                                    <Ultraviolet data={forecastData[selectedLocation]} />
                                </div>
                                <div className={`${styles.autoSpan} ${styles.card}`}>
                                    <Astro data={forecastData[selectedLocation]?.forecast?.forecastday[0]?.astro} />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

const styles = {
    content: "flex items-center justify-center",
    container: "h-[83vh] w-full grid grid-flow-col grid-cols-4 grid-rows-3 gap-2 bg-slate-100 mb-6 mx-6 p-2 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
    card: "bg-white rounded-lg drop-shadow-md border-b-2 border-slate-200",
    rowSpanThree: "row-span-3",
    colSpanThree: "col-span-3",
    colSpanTwo: "col-span-2",
    autoSpan: ""
}
