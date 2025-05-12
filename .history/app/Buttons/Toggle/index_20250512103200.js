"use client";

import { useState } from "react";
import "./styles.css";

export function Toggle() {
    const [onOffToggled, setonOffToggled] = useState(false);

    return (
        <div className='on-off-Toggle'>
            <button
                className={`on-off-toggle-btn ${
                    onOffToggled ? "on-offtoggled" : ""
                }`}
                onClick={() => setonOffToggled(!onOffToggled)}
            >
                <span className='toggle-label'>
                    {onOffToggled ? "ON" : "OFF"}
                </span>
                <div className='on-off-thumb'></div>
            </button>
        </div>
    );
}
