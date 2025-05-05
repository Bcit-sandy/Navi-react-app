"use client";
import styles from "./Elipses.module.css";

export function Elipses() {
    return (
        <button className={styles.elipses}>
            <img
                className={styles.elipsesIcon}
                src='/elipses.svg'
                alt='three dots'
            />
        </button>
    );
} 