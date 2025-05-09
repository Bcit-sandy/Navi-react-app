"use client";

import { useState } from "react";
import "./styles.css";

export function StudentCategories() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        "Undergraduate",
        "Graduate",
        "PhD",
        "Alumni"
    ];

    const handleClick = (category) => {
        setSelectedCategory(category);
        console.log("Selected category:", category);
    };

    return (
        <div className="studentCategories">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`category ${selectedCategory === category ? 'category-active' : ''}`}
                    onClick={() => handleClick(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
} 