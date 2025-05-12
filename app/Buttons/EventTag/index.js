"use client";

import "./styles.css";

export function EventTag({ text, color = "blue" }) {
    return (
        <span className={`eventTag ${color}`}>
            {text}
        </span>
    );
} 