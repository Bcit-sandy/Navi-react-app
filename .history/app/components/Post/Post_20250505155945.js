"use client";
import styles from "./Post.module.css";

export function Post({ label = "Post →", onClick }) {
    return (
        <button 
            className={styles.postButton}
            onClick={onClick}
        >
            {label}
        </button>
    );
} 