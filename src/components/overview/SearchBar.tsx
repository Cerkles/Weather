"use client"
import { getSearchLocation } from "@/api/requests";
import { useEffect, useState, useRef } from "react";
import { useOutsideClick } from "@/utils/overview-utils/location-utils";

export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")
    const [locationSearch, setLocationSearch] = useState<LocationResults[]>([])
    const [searchBarSelected, setSearchBarSelected] = useState(false)
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        searchInput.length > 0 && getSearchLocation(searchInput).then(res => setLocationSearch(res))
    }, [searchInput])

    useOutsideClick(ref, () => setSearchBarSelected(false));

    const handleSearchInput = (result: string, selected: boolean) => {
        setSearchInput(result);
        setSearchBarSelected(selected)
    }

    return (
        <div ref={ref} className={styles.root}>
            <input
                id="location_search"
                value={searchInput}
                className={styles.searchInput}
                placeholder="Search"
                onChange={(e) => handleSearchInput(e.target.value, true)} />
            <div className={styles.searchResultsContainer}>
                {locationSearch.length > 0 && searchBarSelected && locationSearch.map((results) =>
                    <div key={results.name} className={styles.searchResults} onClick={() => handleSearchInput(results.name, false)}>
                        {results.name}, {results.country}
                    </div>
                )}
            </div>
        </div>
    )
}

const styles = {
    root: "flex absolute right-0 items-center justify-end m-4",
    searchInput: "rounded h-8 w-[15rem] p-1",
    searchResultsContainer: "absolute w-[15rem] h-1 left-0 bottom-0 z-10",
    searchResults: "bg-slate-300 p-1 hover:bg-sky-500 select-none"
}