"use client";

import { useState } from "react";
import "./styles.css";

export function Join() {
    const [isJoined, setIsJoined] = useState(false);

    const handleClick = () => {
        setIsJoined(!isJoined);
        console.log("Join status:", !isJoined);
    };

    return (
        <button 
            className={`join ${isJoined ? 'joined' : ''}`}
            onClick={handleClick}
        >
            {isJoined ? 'Joined' : 'Join'}
        </button>
    );
} 