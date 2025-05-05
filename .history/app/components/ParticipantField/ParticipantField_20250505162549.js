"use client";
import styles from "./ParticipantField.module.css";

export function ParticipantField() {
    return (
        <input
            type="number"
            placeholder="Enter number here"
            className={styles.field}
            min="0"
            inputMode="numeric"
            pattern="[0-9]*"
        />
    );
} 