"use client";

import { useState } from "react";
import "./styles.css";

export function Follow({ isFollowing = false, onClick }) {
    return (
        <button 
            className={`follow-button ${isFollowing ? 'followed' : ''}`}
            onClick={onClick}
        >
            <img
                src={isFollowing ? "/followed.svg" : "/follow.svg"} 
                alt={isFollowing ? "unfollow icon" : "follow icon"}
                width={25}
                height={25}
            />
            <span className="follow-text">{isFollowing ? "Followed" : "Follow"}</span>
        </button>
    );
}