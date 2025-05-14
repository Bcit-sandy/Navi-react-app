"use client";

import { useState } from "react";
import "./styles.css";

export function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (onSearch) {
            onSearch(value);
        }
    };

    return (
        <div className='search'>
            <button
                className='search-button'
                onClick={onClick}
            >
                <Image
                    src='search.svg'
                    alt='search icon'
                    width={32}
                    height={32}
                />
            </button>
        </div>
    );
}
