"use client";
import { useState } from "react";
import "./styles.css";

export function Community() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("community button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`community ${isActive ? "community-active" : ""}`}
            onClick={handleClick}>
            <img
                className='community_icon'
                src='/community.svg'
                alt='community icon'></img>
            Create Community Post
        </button>
    );
} 