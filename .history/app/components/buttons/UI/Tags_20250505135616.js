"use client";
import "./Tags.css";

export function Tags({label, onClick, isSelected = false }) {
    return (
        <button 
            className={`tag ${isSelected ? 'tag--selected' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
} 