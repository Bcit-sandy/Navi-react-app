"use client";

import { useState } from "react";
import "./styles.css";
import Image from "next/image";

export function Send() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("Send button clicked, active:", !isActive);
    };

    return (
        <button 
            className={`send ${isActive ? 'send-active' : ''}`}
            onClick={handleClick}
        >
            <Image 
                src="/send.svg" 
                alt="Send"
                width={24}
                height={24}
            />
        </button>
    );
} 