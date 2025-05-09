"use client";

import "./styles.css";

export function ProfileTag({ isActive, onClick, children }) {
    return (
        <button 
            className={`profileTag ${isActive ? 'profileTag-active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}