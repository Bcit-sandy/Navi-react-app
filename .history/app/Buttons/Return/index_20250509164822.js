"use client";

import { useState } from "react";
import "./styles.css";

export function Return() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Return button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`return ${isActive ? 'return-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/arrow_left.svg" alt="Return" />
        </button>
    );
} 