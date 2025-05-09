"use client";
import { useState } from "react";
import "./styles.css";

export function Event() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`event ${isActive ? "event-active" : ""}`}
            onClick={handleClick}>
            <img
                className='event_icon'
                src='/event.svg'
                alt='event icon'></img>
            Create Event Post
        </button>
    );
} 