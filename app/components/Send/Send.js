"use client";
import styles from "./Send.module.css";

export function Send({ onClick }) {
    return (
        <button 
            className={styles.send}
            onClick={onClick}
        >
            <img 
                src="/send.svg" 
                alt="send icon"
                className={styles.icon}
            />
        </button>
    );
} 