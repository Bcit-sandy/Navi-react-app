"use client";
import { useState } from "react";
import "./styles.css";

export function ImageAdd() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button className={`imageAdd ${isActive ? "imageAdd-active" : ""}`}
        onClick={handleClick}>
            <img
                className='imageAdd_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
} 