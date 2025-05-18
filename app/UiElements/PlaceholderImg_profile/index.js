"use client";
import "./styles.css";


export function PlaceholderImg_profile({ src }) {
    const imageSrc = src ? src : "/placeholder.webp";

    return (
        <div className="image-placeholder">
            <img
                src={imageSrc}
                alt="Profile image"
                className="placeholderImg_profile"
            />
        </div>
    );
}