"use client";
import styles from "./Toggle.module.css";

export function Toggle({ 
    checked,
    onChange,
    label,
    size = "medium"
}) {
    return (
        <label className={`${styles.toggle} ${styles[size]}`}>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className={styles.toggleInput}
            />
            <span className={styles.toggleSlider} />
            {label && <span className={styles.toggleLabel}>{label}</span>}
        </label>
    );
} 