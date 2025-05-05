"use client";
import styles from "./Radio.module.css";

export function Radio({ 
    name,
    value,
    checked,
    onChange,
    label,
    size = "medium"
}) {
    return (
        <label className={`${styles.radio} ${styles[size]}`}>
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.radioInput}
            />
            <span className={styles.radioButton} />
            {label && <span className={styles.radioLabel}>{label}</span>}
        </label>
    );
} 