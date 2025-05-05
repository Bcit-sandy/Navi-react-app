"use client";
import "./module.explore.css";
import { useEffect, useState, useRef } from "react";

export function Explore() {
    const [isActive, setIsActive] = useState(false);
    const buttonStyles = {
        marginBottom: '1rem'
    };

    return (
        <button
            className={`explore ${isActive ? "explore-active" : ""}`}
            style={buttonStyles}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}>
            Let's go explore!
            <img
                className='explore_arrow'
                src='/arrow_right.svg'
                alt='right arrow'
            />
        </button>
    );
}

