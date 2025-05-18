"use client";
import { useState } from "react";
import "./styles.css";

export function ImageAdd() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        if (!isActive) {
            setIsActive(true);
        }
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        setIsActive(false);
    };

    return (
        <button
            className={`imageAdd ${isActive ? "imageAdd-active" : ""}`}
            onClick={handleClick}
        >
            <img
                className='imageAdd_button'
                src={isActive ? "/community_posting_add_image.jpg" : "/add.svg"}
                alt={isActive ? "preview image" : "add button"}
            />
            {isActive && (
                <div
                    className='delete-button'
                    onClick={handleDelete}
                    role='button'
                    tabIndex={0}
                >
                    <img
                        src='/delete.svg'
                        alt='delete'
                        className='delete-icon'
                    />
                </div>
            )}
        </button>
    );
}
