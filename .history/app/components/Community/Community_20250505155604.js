"use client";
import { useState } from "react";
import styles from "./Community.module.css";

export function Community() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Community button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.community} ${isActive ? styles.communityActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.communityIcon}
                src='/community.svg'
                alt='community icon'
            />
            Create Community Post
        </button>
    );
} 