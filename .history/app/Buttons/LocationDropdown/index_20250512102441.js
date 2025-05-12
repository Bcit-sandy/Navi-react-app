"use client";

import { useState } from "react";
import "./styles.css";

// drop down location button
export function LocationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleOptionClick = (location) => {
        setSelectedLocation(location);
        setSearchValue(location);
        setIsOpen(false);
    };

    const locations = [
        "Vancouver, BC",
        "Burnaby, BC",
        "Coquitlam, BC",
        "Surrey, BC",
        "Richmond, BC",
    ];

    return (
        <div className={`location-dropdown ${isOpen ? "open" : ""}`}>
            <div className='dropdown-trigger'>
                <div className='search-icon'>
                    <Image
                        src='/search.svg'
                        alt='search'
                        width={20}
                        height={20}
                    />
                </div>
                <input
                    type='text'
                    className='search-input'
                    placeholder='Search here'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                />
                <button
                    className={`dropdown-button ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src={isOpen ? "/dropdown.svg" : "/dropdown-right.svg"}
                        alt='expand'
                        width={18}
                        height={18}
                    />
                </button>
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    {locations
                        .filter((location) =>
                            location
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((location, index) => (
                            <div
                                key={index}
                                className={`location-option ${
                                    selectedLocation === location
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleOptionClick(location)}
                            >
                                {location}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
