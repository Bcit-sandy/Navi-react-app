"use client";
import styles from "./Join.module.css";

export function Join({ isJoined = false, onClick }) {
    return (
        <button 
            className={`${styles.joinButton} ${isJoined ? styles.joinButtonJoined : ''}`}
            onClick={onClick}
        >
            {isJoined ? "Joined" : "Join"}
        </button>
    );
} 