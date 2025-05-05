"use client";
import styles from "./Join.module.css";

export function Join({ isJoined = false, onClick }) {
    return (
        <button 
            className={`${styles.join} ${isJoined ? styles.joined : ''}`}
            onClick={onClick}
        >
            {isJoined ? "Joined" : "Join"}
        </button>
    );
} 