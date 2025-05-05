"use client";

import { useState } from "react";
import styles from "./Skip.module.css";

export default function Skip() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.skip} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}
        >
            <img
                className={styles.icon}
                src='/skip.svg'
                alt='skip icon'
            />
        </button>
    );
} 