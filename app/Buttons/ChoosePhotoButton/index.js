"use client";

import { useState } from "react";
import "./styles.css";

export function ChoosePhotoButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Choose photo button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`choosePhotoButton ${isActive ? 'choosePhotoButton-active' : ''}`}
            onClick={handleClick}
        >
            <img src="/gallery.svg" alt="Choose Photo" />
            Choose from Gallery
        </button>
    );
} 