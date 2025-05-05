"use client";
import { useState } from "react";
import styles from "./Share.module.css";

export function Share() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Share button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.share} ${isActive ? styles.shareActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.shareIcon}
                src='/share.svg'
                alt='share icon'
            />
        </button>
    );
} 