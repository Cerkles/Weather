"use client"
import { useState, useEffect } from "react";
import { guestLocations } from "@/guest-data/guest-locations";
import { Topbar } from "@/components/top-bar/Topbar";
import { OverviewSkeleton } from "@/components/skeletons/overview/OverviewSkeleton";
import { Locations } from "@/components/overview/Locations";
import { GeneralInfo } from "@/components/overview/GeneralInfo";
import { HourlyForecast } from "@/components/overview/HourlyForecast";
import { AirQuality } from "@/components/overview/AirQuality";
import { Wind } from "@/components/overview/Wind";
import { Precipitation } from "@/components/overview/Precipitation";
import { Ultraviolet } from "@/components/overview/Ultraviolet";
import { getForecastData } from "@/api/requests";
import { useOverviewStore } from "@/store/overview-store";

export default function Overview() {
    const [loading, setLoading] = useState(true)
    const selectedLocation = useOverviewStore((state) => state.location)
    const forecastData = useOverviewStore((state) => state.data)
    const setForecastData = useOverviewStore((state) => state.setData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = guestLocations.map(location =>
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
    }, []);

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
                                <div className={styles.rowSpanThree}>
                                    <GeneralInfo data={forecastData[selectedLocation]} />
                                </div>
                                <div className={styles.colSpanTwo}>
                                    <HourlyForecast data={forecastData[selectedLocation]} />
                                </div>
                                <div className={styles.autoSpan}>
                                    <AirQuality data={forecastData[selectedLocation]?.current?.air_quality} />
                                </div>
                                <div className={styles.autoSpan}>
                                    <Wind data={forecastData[selectedLocation]?.current} />
                                </div>
                                <div className={styles.autoSpan}>
                                    <Precipitation data={forecastData[selectedLocation]?.current} />
                                </div>
                                <div className={styles.autoSpan}>
                                    <Ultraviolet data={forecastData[selectedLocation]?.current} />
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
    container: "h-[85vh] w-full grid grid-flow-col gap-3 bg-slate-100 mb-6 mx-6 p-2 rounded-lg border-b-2 border-slate-200 drop-shadow-lg",
    rowSpanThree: "row-span-3 bg-white rounded-lg drop-shadow-md border-b-2 border-slate-200",
    colSpanTwo: "col-span-2 bg-white rounded-lg drop-shadow-md border-b-2 border-slate-200",
    autoSpan: "bg-white rounded-lg drop-shadow-md border-b-2 border-slate-200"
}
