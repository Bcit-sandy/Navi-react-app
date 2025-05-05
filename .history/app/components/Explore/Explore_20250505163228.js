"use client";

import { useState } from "react";
import styles from "./Explore.module.css";

export default function Explore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.explore} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}>
            <img
                className={styles.icon}
                src='/explore.svg'
                alt='explore icon'
            />
        </button>
    );
} 