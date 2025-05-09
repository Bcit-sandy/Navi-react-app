"use client";

import { useState } from "react";
import "./styles.css";

export function EditButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Edit button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`editButton ${isActive ? 'editButton-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/edit.svg" alt="Edit" />
        </button>
    );
} 