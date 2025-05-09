"use client";

import { useState } from "react";
import "./styles.css";

export function CommentButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Comment button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`comment ${isActive ? 'comment-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/comment.svg" alt="Comment" />
        </button>
    );
} 