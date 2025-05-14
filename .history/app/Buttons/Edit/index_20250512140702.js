"use client";

import { useState } from "react";
import "./styles.css";

export function Edit({ onClick }) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        if (onEdit) {
            onEdit(!isActive);
        }
    };

    return (
        <button
            className='edit-button'
            onClick={onClick}
        >
            <Image
                src='/edit.svg'
                alt='edit icon'
                width={32}
                height={32}
            />
        </button>
    );
} 