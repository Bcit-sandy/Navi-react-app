"use client";
import Image from "next/image";

export function Heart({ size = "small", isLiked = false, onClick }) {
    return (
        <button 
            className={`heart-button heart-${size}`}
            onClick={onClick}
        >
            <Image 
                src={isLiked ? "/filledheart.svg" : "/outlineheart.svg"} 
                alt={isLiked ? "filled heart icon" : "outline heart icon"}
                width={size === "small" ? 24 : 32}
                height={size === "small" ? 24 : 32}
            />
        </button>
    );
} 