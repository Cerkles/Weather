"use client"
import { useEffect, useRef } from "react";
import { guestLocations } from "@/guest-data/guest-locations"
import { useOverviewStore } from "@/store/overview-store";
import { SearchBar } from "./SearchBar";

export const Locations = () => {
  const selectedLocation = useOverviewStore((state) => state.location)
  const selectLocation = useOverviewStore((state) => state.selectLocation)
  const forecastData = useOverviewStore((state) => state.forecastData)
  const locations = useOverviewStore((state) => state.locations)

  const separaterContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        if (separaterContainerRef.current) {
          separaterContainerRef.current.scrollLeft += event.deltaY;
        }
      }
    };

    const separaterContainer = separaterContainerRef.current;
    separaterContainer?.addEventListener('wheel', handleWheel);

    return () => {
      separaterContainer?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className={styles.root}>
      <div className={styles.locationsContainer} ref={separaterContainerRef}>
        {locations.map((location, index) =>
          <button key={`location_${index}`}
            className={`${styles.location} ${styles.button}
                        ${selectedLocation === index ? styles.selected : styles.other}`}
            onClick={() => selectLocation(index)}>

            <p className={styles.text}>{location.city}</p>
            <div className={`${styles.icon} 
                        ${selectedLocation === index ? styles.selectedIcon : styles.otherIcon}`}>
              <img src={forecastData[index]?.current?.condition.icon} />
            </div>
          </button>)}
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
    </div>
  )
}

const styles = {
  root: "flex justify-between ml-4",
  location: "flex items-center mx-2 my-4 pl-1 rounded-full",
  button: "transition ease-in-out duration-300 border-b-2 hover:scale-110 drop-shadow-md",
  text: "px-2 text-white whitespace-nowrap",
  icon: "flex items-center p-1 w-[2rem] h-[2rem] bg-white border-2 rounded-full transition ease-in-out duration-300",
  selected: "bg-sky-500 border-sky-600",
  selectedIcon: "text-sky-500 border-sky-500",
  other: "bg-slate-300 border-slate-400",
  otherIcon: "text-slate-300 border-slate-300",
  locationsContainer: "flex items-center overflow-x-scroll hide-scrollbar",
  searchBarContainer: "flex items-center mx-[2rem]"
}