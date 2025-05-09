"use client";

import { useState } from "react";
import "./styles.css";

export function SignIn() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("SignIn button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`signIn ${isActive ? 'signIn-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/signin.svg" alt="Sign In" />
        </button>
    );
} 