"use client";

import { useState } from "react";
import "./styles.css";

export function Post({ label = "Post →", onClick }) {
    return (
        <button 
            className="post-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}