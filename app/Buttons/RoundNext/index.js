"use client";
import { useState } from "react";
import "./styles.css";

export function RoundNext() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };
    return (
        <button
            className={`roundNext ${isActive ? "roundNext-active" : ""}`}
            onClick={handleClick}>
            <img
                className='roundNext_icon'
                src='/arrow_right.svg'
                alt='next icon'></img>
        </button>
    );
} 