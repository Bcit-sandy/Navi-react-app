"use client";
import styles from "./Progress.module.css";

export function Progress({ 
    value,
    max = 100,
    showLabel = true,
    size = "medium",
    color = "primary"
}) {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={styles.progressContainer}>
            <div 
                className={`${styles.progressBar} ${styles[size]} ${styles[color]}`}
                style={{ width: `${percentage}%` }}
            />
            {showLabel && (
                <span className={styles.progressLabel}>
                    {percentage.toFixed(0)}%
                </span>
            )}
        </div>
    );
} 