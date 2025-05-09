"use client";
import "./styles.css";
import "../../globals.css";
import { useState } from "react";
import Image from "next/image";

export function Heart({ initialLiked = false, onLike }) {
    const [isLiked, setIsLiked] = useState(initialLiked);

    const handleClick = () => {
        const newLikedState = !isLiked;
        setIsLiked(newLikedState);
        if (onLike) {
            onLike(newLikedState);
        }
    };

    return (
        <button 
            className={`heart ${isLiked ? 'liked' : ''}`}
            onClick={handleClick}
        >
            <Image 
                src={isLiked ? "/filledheart.svg" : "/outlineheart.svg"} 
                alt={isLiked ? "Unlike" : "Like"}
                width={24}
                height={24}
            />
        </button>
    );
} 