"use client";
import styles from "./Spinner.module.css";

export function Spinner({ 
    size = "medium",
    color = "primary"
}) {
    return (
        <div className={`${styles.spinner} ${styles[size]} ${styles[color]}`}>
            <div className={styles.spinnerInner} />
        </div>
    );
} 