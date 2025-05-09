"use client";

import { useState } from "react";
import "./styles.css";

export default function Edit({ onEdit }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (onEdit) {
            onEdit(!isActive);
        }
    };

    return (
        <button 
            className={`edit ${isActive ? 'edit-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/edit.svg" alt="Edit" />
        </button>
    );
} 