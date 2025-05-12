"use client";

import { useState } from "react";
import "./styles.css";

export function Comment() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Comment button clicked, active:", !isActive);
    };

    return (
        <button
            className={`comment ${isActive ? "comment-active" : ""}`}
            onClick={handleClick}
        >
            <img
                src='/comment.svg'
                alt='Comment'
                width={32}
                height={32}
            />
            <img
                src='/comment.svg'
                alt='Comment'
                width={28}
                height={28}
            />
        </button>
    );
}
