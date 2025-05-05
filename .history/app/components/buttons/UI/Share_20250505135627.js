"use client";
import Image from "next/image";
import "./Share.css";

export function Share({ onClick }) {
    return (
        <button 
            className="share-button"
            onClick={onClick}
        >
            <Image 
                src="/share.svg" 
                alt="share icon"
                width={25}
                height={24}
            />
        </button>
    );
} 