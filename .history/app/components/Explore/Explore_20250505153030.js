"use client";
import { useState } from "react";
import styles from "./Explore.module.css";

export function Explore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.explore} ${isActive ? styles.exploreActive : ""}`}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}>
            Let's go explore!
            <img
                className={styles.exploreArrow}
                src='/arrow_right.svg'
                alt='right arrow'
            />
        </button>
    );
} 