"use client";
import styles from "./Badge.module.css";

export function Badge({ 
    label,
    type = "default",
    size = "medium"
}) {
    return (
        <span className={`${styles.badge} ${styles[type]} ${styles[size]}`}>
            {label}
        </span>
    );
} 