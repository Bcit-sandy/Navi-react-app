"use client";
import { useState } from "react";
import styles from "./LeaveEvent.module.css";

export function LeaveEvent() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(button) {
        setActiveButton(button);
    }

    return (
        <div className={styles.leaveEvent}>
            <p className={styles.leaveEventText}>Do you want to leave this event?</p>
            <div className={styles.leaveEventOptions}>
                <button
                    className={`${styles.leaveEventYes} ${
                        activeButton === "yes"
                            ? styles.leaveEventYesActive
                            : styles.leaveEventYesInactive
                    }`}
                    onClick={() => handleClick("yes")}>
                    Yes, I would like to leave
                </button>
                <button
                    className={`${styles.leaveEventNo} ${
                        activeButton === "no"
                            ? styles.leaveEventNoActive
                            : styles.leaveEventNoInactive
                    }`}
                    onClick={() => handleClick("no")}>
                    No, I would like to stay
                </button>
            </div>
        </div>
    );
} 