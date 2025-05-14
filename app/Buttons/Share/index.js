"use client";
import { useState } from "react";
import "./styles.css";

export function Share() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Share button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`share ${isActive ? "share-active" : ""}`}
            onClick={handleClick}
        >
            <img
                className='share_icon'
                src='/share.svg'
                alt='share icon'
            ></img>
        </button>
    );
}
