"use client";

import { useState } from "react";
import "./styles.css";

export function SearchButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Search button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`searchButton ${isActive ? 'searchButton-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/search.svg" alt="Search" />
        </button>
    );
} 