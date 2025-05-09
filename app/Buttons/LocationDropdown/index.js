"use client";

import { useState } from "react";
import "./styles.css";

export default function LocationDropdown({ locations, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleSelect = (location) => {
        setSelectedLocation(location);
        setIsOpen(false);
        if (onSelect) {
            onSelect(location);
        }
    };

    return (
        <div className="locationDropdown">
            <button 
                className="locationButton"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src="/location.svg" alt="Location" />
                <span>{selectedLocation || "Select Location"}</span>
                <img 
                    src="/arrow_down.svg" 
                    alt="Dropdown" 
                    className={`dropdownArrow ${isOpen ? 'open' : ''}`}
                />
            </button>
            {isOpen && (
                <div className="locationOptions">
                    {locations.map((location) => (
                        <button
                            key={location}
                            className={`locationOption ${selectedLocation === location ? 'selected' : ''}`}
                            onClick={() => handleSelect(location)}
                        >
                            {location}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
} 