"use client";

import { useState } from "react";
import "./styles.css";

export default function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    return (
        <div className="search">
            <img src="/search.svg" alt="Search" className="searchIcon" />
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleChange}
                className="searchInput"
            />
        </div>
    );
} 