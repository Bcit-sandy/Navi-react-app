"use client";

import { useState } from "react";
import "./styles.css";

export default function AnonymousToggle({ initialState = false, onChange }) {
    const [isAnonymous, setIsAnonymous] = useState(initialState);

    const handleToggle = () => {
        const newState = !isAnonymous;
        setIsAnonymous(newState);
        if (onChange) {
            onChange(newState);
        }
    };

    return (
        <div className="anonymousToggle">
            <label className="toggleLabel">
                <span>Post Anonymously</span>
                <button 
                    className={`toggle ${isAnonymous ? 'toggle-on' : 'toggle-off'}`}
                    onClick={handleToggle}
                    role="switch"
                    aria-checked={isAnonymous}
                >
                    <div className="toggle-slider" />
                </button>
            </label>
            {isAnonymous && (
                <p className="anonymousNote">
                    Your name will be hidden from other users
                </p>
            )}
        </div>
    );
} 