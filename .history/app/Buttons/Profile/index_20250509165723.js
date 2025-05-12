"use client";

import { useState } from "react";
import "./styles.css";

export function Profile({ user }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Profile button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`profile ${isActive ? 'profile-active' : ''}`}
            onClick={handleClick}
        >
            <img src={user?.avatar || "/default_avatar.svg"} alt="Profile" className="profileAvatar" />
            <span className="profileName">{user?.name || "Profile"}</span>
        </button>
    );
} 