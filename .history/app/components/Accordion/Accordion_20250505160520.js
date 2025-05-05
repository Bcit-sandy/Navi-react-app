"use client";
import { useState } from "react";
import styles from "./Accordion.module.css";

export function Accordion({ 
    items,
    allowMultiple = false
}) {
    const [activeItems, setActiveItems] = useState([]);

    const toggleItem = (index) => {
        setActiveItems((prev) => {
            if (allowMultiple) {
                return prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index];
            } else {
                return prev.includes(index) ? [] : [index];
            }
        });
    };

    return (
        <div className={styles.accordion}>
            {items.map((item, index) => (
                <div 
                    key={index}
                    className={styles.accordionItem}
                >
                    <button
                        className={styles.accordionHeader}
                        onClick={() => toggleItem(index)}
                    >
                        <span className={styles.accordionTitle}>{item.title}</span>
                        <span className={styles.accordionIcon}>
                            {activeItems.includes(index) ? "−" : "+"}
                        </span>
                    </button>
                    {activeItems.includes(index) && (
                        <div className={styles.accordionContent}>
                            {item.content}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
} 