"use client";

import { useState } from 'react'
import styles from "./Report.module.css";

export default function Report() {
    const [isActive, setIsActive] = useState(false)

    return (
        <button 
            className={`${styles.report} ${isActive ? styles.active : ''}`}
            onClick={() => setIsActive(!isActive)}
        >
            <img
                className={styles.icon}
                src='/report.svg'
                alt='report icon'
            />
        </button>
    );
} 