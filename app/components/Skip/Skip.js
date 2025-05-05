"use client";
import { useState } from "react";
import styles from "./Skip.module.css";

export function Skip() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Skip button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.skip} ${isActive ? styles.skipActive : ""}`}
            onClick={handleClick}>
            Skip
        </button>
    );
} 