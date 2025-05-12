"use client";
import { useState } from "react";
import "./styles.css";

export function Skip() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Skip button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`skip ${isActive ? "skip-active" : ""}`}
            onClick={handleClick}>
            Skip
        </button>
    );
} 