"use client";
import styles from "./Tags.module.css";

export function Tags({ label, onClick, isSelected = false }) {
    return (
        <button 
            className={`${styles.tag} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
} 