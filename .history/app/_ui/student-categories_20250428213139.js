"use client";
import { useState } from "react";
import "./student-categories.css";

export function StudentCategories({ onSelect }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelect = (category) => {
        setSelectedCategory(category);
        if (onSelect) {
            onSelect(category);
        }
    };

    return (
        <div
            className={`student-categories ${
                selectedCategory ? "has-selected" : ""
            }`}
        >
            <button
                className={`category-card ${
                    selectedCategory === "highschool" ? "selected" : ""
                }`}
                onClick={() => handleSelect("highschool")}
            >
                <div className='card-content'>
                    <div className='card-image highschool'></div>
                    <h3>High School Student</h3>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "postgrad" ? "selected" : ""
                }`}
                onClick={() => handleSelect("postgrad")}
            >
                <div className='card-content'>
                    <div className='card-image postgrad'></div>
                    <h3>Post-Grad Student</h3>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "break" ? "selected" : ""
                }`}
                onClick={() => handleSelect("break")}
            >
                <div className='card-content'>
                    <div className='card-image break'></div>
                    <h3>Student taking a break</h3>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "other" ? "selected" : ""
                }`}
                onClick={() => handleSelect("other")}
            >
                <div className='card-content'>
                    <div className='card-image other'></div>
                    <h3>Other</h3>
                </div>
            </button>
        </div>
    );
}
