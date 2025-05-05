"use client";

import { useState } from "react";
import styles from "./ImageAdd.module.css";

export default function ImageAdd() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button 
            className={`${styles.imageAdd} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}
        >
            <img
                className={styles.icon}
                src='/add_image.svg'
                alt='add image icon'
            />
        </button>
    );
} 