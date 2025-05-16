"use client";

import "./styles.css";

export function Tags({ label, isSelected, onClick }) {
    return (
        <button 
            className={`tag ${isSelected ? 'tag-selected' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}