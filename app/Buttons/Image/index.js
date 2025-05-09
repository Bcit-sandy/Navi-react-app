"use client";

import "./styles.css";

export function Image({ src, alt, className, ...props }) {
    return (
        <img
            src={src}
            alt={alt || "Image"}
            className={`image ${className || ''}`}
            {...props}
        />
    );
} 