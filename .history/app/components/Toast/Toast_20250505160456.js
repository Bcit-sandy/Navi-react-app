"use client";
import { useEffect } from "react";
import styles from "./Toast.module.css";

export function Toast({ 
    message,
    type = "info",
    duration = 3000,
    onClose
}) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <div className={styles.toastContent}>
                <span className={styles.toastMessage}>{message}</span>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
        </div>
    );
} 