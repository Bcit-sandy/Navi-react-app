"use client";

import { useState } from "react";
import "./styles.css";

export function UserCircles() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("User circles button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`userCircles ${isActive ? 'userCircles-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/user_circles.svg" alt="User Circles" />
        </button>
    );
} 