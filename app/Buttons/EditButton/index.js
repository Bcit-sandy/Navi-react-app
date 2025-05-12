"use client";

import { useState } from "react";
import "./styles.css";
import Image from "next/image";

export function EditButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Edit button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`editButton ${isActive ? 'editButton-active' : ''}`}
            onClick={handleClick}
        >
            <Image 
                src="/edit.svg" 
                alt="Edit"
                width={24}
                height={24}
            />
        </button>
    );
} 