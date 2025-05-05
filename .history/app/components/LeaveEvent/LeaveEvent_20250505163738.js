"use client";
import { useState } from "react";
import styles from "./LeaveEvent.module.css";

export function LeaveEvent() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(button) {
        setActiveButton(button);
    }

    return (
        <div className={styles.container}>
            <p className={styles.text}>Do you want to leave this event?</p>
            <div className={styles.options}>
                <button
                    className={`${styles.button} ${styles.yes} ${activeButton === "yes" ? styles.active : ""}`}
                    onClick={() => handleClick("yes")}>
                    Yes, I would like to leave
                </button>
                <button
                    className={`${styles.button} ${styles.no} ${activeButton === "no" ? styles.active : ""}`}
                    onClick={() => handleClick("no")}>
                    No, I would like to stay
                </button>
            </div>
        </div>
    );
} 