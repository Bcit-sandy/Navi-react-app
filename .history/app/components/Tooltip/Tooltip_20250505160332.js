"use client";
import { useState } from "react";
import styles from "./Tooltip.module.css";

export function Tooltip({ 
    content,
    children,
    position = "top"
}) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div 
            className={styles.tooltipContainer}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className={`${styles.tooltip} ${styles[position]}`}>
                    {content}
                </div>
            )}
        </div>
    );
} 