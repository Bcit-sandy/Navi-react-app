"use client";

import { useState } from "react";
import "./styles.css";

export function TextSizeRadio() {
    const [selectedSize, setSelectedSize] = useState("medium");

    const sizes = [
        { id: "small", label: "Small" },
        { id: "medium", label: "Medium" },
        { id: "large", label: "Large" }
    ];

    const handleChange = (size) => {
        setSelectedSize(size);
        console.log("Selected text size:", size);
    };

    return (
        <div className="textSizeRadio">
            {sizes.map((size) => (
                <div key={size.id} className="radioOption">
                    <input
                        type="radio"
                        id={size.id}
                        name="textSize"
                        value={size.id}
                        checked={selectedSize === size.id}
                        onChange={() => handleChange(size.id)}
                    />
                    <label htmlFor={size.id}>{size.label}</label>
                </div>
            ))}
        </div>
    );
} 