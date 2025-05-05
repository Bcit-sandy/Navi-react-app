"use client";
import { useState } from "react";
import styles from "./RoundNext.module.css";

export function RoundNext() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("RoundNext button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.roundNext} ${isActive ? styles.roundNextActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.roundNextIcon}
                src='/arrow_right.svg'
                alt='next icon'
            />
        </button>
    );
} 