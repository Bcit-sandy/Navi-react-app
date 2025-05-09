"use client";

import { useState } from "react";
import "./styles.css";

export default function CalendarViewButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Calendar view button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`calendarViewButton ${isActive ? 'calendarViewButton-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/calendar.svg" alt="Calendar View" />
        </button>
    );
} 