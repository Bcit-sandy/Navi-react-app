"use client";

import { useState } from "react";
import "./styles.css";

export function Post() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Post button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`post ${isActive ? 'post-active' : ''}`}
            onClick={handleClick}
        >
            Post
        </button>
    );
} 