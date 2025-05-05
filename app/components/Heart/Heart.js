"use client";
import { useState } from "react";
import styles from "./Heart.module.css";

export function Heart({ size = "small", isLiked = false, onClick }) {
    return (
        <button 
            className={`${styles.heart} ${styles[size]}`}
            onClick={onClick}
        >
            <img 
                src={isLiked ? "/filledheart.svg" : "/outlineheart.svg"} 
                alt={isLiked ? "filled heart icon" : "outline heart icon"}
                className={styles.icon}
            />
        </button>
    );
} 