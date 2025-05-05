"use client";

import { useState } from "react";
import styles from "./Community.module.css";

export default function Community() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.community} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}
        >
            <img
                className={styles.icon}
                src='/community.svg'
                alt='community icon'
            />
        </button>
    );
} 