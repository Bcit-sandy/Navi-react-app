"use client";

import { useState } from "react";
import "./styles.css";

export function SignUp() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("SignUp button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`signUp ${isActive ? 'signUp-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/signup.svg" alt="Sign Up" />
        </button>
    );
} 