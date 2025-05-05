"use client";

import { useState } from "react";
import styles from "./Add.module.css";

export default function Add() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`${styles.add} ${isActive ? styles.active : ""}`}
            onClick={() => setIsActive(!isActive)}
        >
            <img
                className={styles.icon}
                src='/add.svg'
                alt='add icon'
            />
        </button>
    );
} 