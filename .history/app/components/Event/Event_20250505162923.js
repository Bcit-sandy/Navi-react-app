"use client";

import { useState } from "react";
import styles from "./Event.module.css";

export default function Event() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.event} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}>
            <img
                className={styles.icon}
                src='/event.svg'
                alt='event icon'
            />
        </button>
    );
} 