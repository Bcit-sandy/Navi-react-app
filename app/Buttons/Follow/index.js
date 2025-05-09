"use client";

import { useState } from "react";
import "./styles.css";

export function Follow() {
    const [isFollowing, setIsFollowing] = useState(false);

    const handleClick = () => {
        setIsFollowing(!isFollowing);
        console.log("Follow status:", !isFollowing);
    };

    return (
        <button 
            className={`follow ${isFollowing ? 'following' : ''}`}
            onClick={handleClick}
        >
            {isFollowing ? 'Following' : 'Follow'}
        </button>
    );
} 