"use client";
import { useState } from "react";
import "./styles.css";

export function Add() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Add button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`add ${isActive ? "add-active" : ""}`}
            onClick={handleClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}