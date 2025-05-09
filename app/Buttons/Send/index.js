"use client";

import { useState } from "react";
import "./styles.css";

export function Send() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Send button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`send ${isActive ? 'send-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/send.svg" alt="Send" />
        </button>
    );
} 