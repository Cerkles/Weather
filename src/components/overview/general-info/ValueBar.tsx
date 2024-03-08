"use client"
import { useState, useEffect } from 'react';

type Props = {
    percent: number;
    location: string;
}

export const ValueBar: React.FC<Props> = ({ percent, location }) => {
    const [progress, setProgress] = useState(0);
    const [city, setCity] = useState(location)

    useEffect(() => {
        const interval = setInterval(() => {
            progress < percent && city === location ?
                (setProgress(previousProgress => previousProgress + 1))
                : city !== location ?
                    (setProgress(0), setCity(location), clearInterval(interval))
                    :
                    (clearInterval(interval))
        }, 10);

        return () => clearInterval(interval);
    }, [progress, percent, location, city]);

    return (
        <div className={styles.progressBar}>
            <div className={styles.barBackground} />
            <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
    )
}

const styles = {
    progressBar: "relative w-1/2 h-2 rounded-lg overflow-hidden",
    barBackground: "absolute top-0 left-0 bg-slate-400 h-full w-full",
    bar: "absolute top-0 left-0 bg-white h-full",
}