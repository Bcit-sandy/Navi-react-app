"use client";
import { useState } from "react";
import styles from "./Add.module.css";

export function Add() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Add button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`${styles.add} ${isActive ? styles.addActive : ""}`}
            onClick={handleClick}>
            <img
                className={styles.addButton}
                src='/add.svg'
                alt='add button'
            />
        </button>
    );
} 