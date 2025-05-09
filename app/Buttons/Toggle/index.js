"use client";

import { useState } from "react";
import "./styles.css";

export default function Toggle({ initialState = false, onChange }) {
    const [isOn, setIsOn] = useState(initialState);

    const handleClick = () => {
        setIsOn(!isOn);
        if (onChange) {
            onChange(!isOn);
        }
        console.log("Toggle state:", !isOn);
    };

    return (
        <button 
            className={`toggle ${isOn ? 'toggle-on' : 'toggle-off'}`}
            onClick={handleClick}
            role="switch"
            aria-checked={isOn}
        >
            <div className="toggle-slider" />
        </button>
    );
} 