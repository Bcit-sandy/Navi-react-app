"use client";
import { useState } from "react";
import styles from "./ImageAdd.module.css";

export function ImageAdd() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button 
            className={`${styles.imageAdd} ${isActive ? styles.imageAddActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.imageAddButton}
                src='/add.svg'
                alt='add button'
            />
        </button>
    );
} 