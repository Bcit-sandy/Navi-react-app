"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";

export function Dropdown({ 
    trigger,
    items,
    align = "left"
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div 
            className={styles.dropdown}
            ref={dropdownRef}
        >
            <div 
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
            >
                {trigger}
            </div>
            {isOpen && (
                <div className={`${styles.menu} ${styles[align]}`}>
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={styles.menuItem}
                            onClick={() => {
                                item.onClick?.();
                                setIsOpen(false);
                            }}
                        >
                            {item.icon && (
                                <span className={styles.icon}>{item.icon}</span>
                            )}
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
} 