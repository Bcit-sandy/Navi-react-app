"use client";
import { useState } from "react";
import styles from "./Event.module.css";

export function Event() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.event} ${isActive ? styles.eventActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.eventIcon}
                src='/event.svg'
                alt='event icon'
            />
            Create Event Post
        </button>
    );
} 