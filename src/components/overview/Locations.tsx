"use client"
import { useEffect, useState } from "react";
import { guestLocations } from "@/guest-data/guest-locations"
import { useOverviewStore } from "@/store/overview-store";
import { SearchBar } from "./SearchBar";
import { MdOutlineEditNote, MdEditOff, MdOutlineRemoveCircle } from "react-icons/md";


export function Locations() {
    const selectedLocation = useOverviewStore((state) => state.location)
    const selectLocation = useOverviewStore((state) => state.selectLocation)
    const currentData = useOverviewStore((state) => state.currentData)
    const setCurrentData = useOverviewStore((state) => state.setCurrentData)
    const editMode = useOverviewStore((state) => state.editMode)
    const setEditMode = useOverviewStore((state) => state.setEditMode)
    const locations = useOverviewStore((state) => state.locations)
    const setLocations = useOverviewStore((state) => state.setLocations)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const promises = locations.map(location =>
            setCurrentData(location.latitude, location.longitude)
          );
          const data = await Promise.all(promises);
          setCurrentData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
  
      fetchData();
    }, [locations]);

    const handleRemoveLocation = (index: number) => {
      const updatedLocations = locations.filter((_, locIndex) => locIndex !== index);
      setLocations(updatedLocations);
    };

// console.log("img", currentData[0]?.current?.condition.icon)
    return (
        <div className={styles.root}>
          <div style={{display: "flex"}}>
            {locations.map((location, index) => 
                    <button key={`location_${index}`}
                        className={`${styles.location} ${styles.button}
                        ${selectedLocation === index ? styles.selected : styles.other}`}
            onClick={() => selectLocation(index)}>

            <p className={styles.text}>{location.city}</p>
            <div className={`${styles.icon} 
                        ${selectedLocation === index ? styles.selectedIcon : styles.otherIcon}`}>
                          {editMode ? <div className={styles.removeButton} onClick={() => handleRemoveLocation(index)}><MdOutlineRemoveCircle/></div> : 
                            <img src={currentData[index]?.current?.condition.icon}/>}
                        </div>

                    </button>
            )}
            </div>
            <div style={{display: "flex"}}>
            <SearchBar/>
            <button className={styles.editButton} onClick={() => setEditMode(!editMode)}>
              {editMode ? <MdEditOff/>:<MdOutlineEditNote />}
              </button>
              </div>
        </div>
    )

}

const styles = {
    root: "flex justify-between items-center ml-4",
    location: "flex items-center mx-2 my-4 pl-1 rounded-full",
    button: "transition ease-in-out duration-300 border-b-2 hover:scale-110 drop-shadow-md",
    text: "px-2 text-white",
    icon: "flex items-center justify-center p-1 h-[2rem] w-[2rem] bg-white border-2 rounded-full transition ease-in-out duration-300",
    selected: "bg-sky-500 border-sky-600",
    selectedIcon: "text-sky-500 border-sky-500",
    other: "bg-slate-300 border-slate-400",
    otherIcon: "text-slate-300 border-slate-300",
    editButton: "items-center justify-end m-4 text-[2rem]",
    removeButton: "text-red-600 transition ease-in-out duration-300 hover:scale-150"
}