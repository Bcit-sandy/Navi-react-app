"use client";
import { useState } from "react";
import "./styles.css";

export function StudentTypeDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("post-grad");

    const options = [
        {
            id: "post-grad",
            label: "Post-Grad",
            icon: "/education.svg",
        },
        {
            id: "high-school",
            label: "High School",
            icon: "/education.svg",
        },
        {
            id: "taking-break",
            label: "Taking a break",
            icon: "/away.svg",
        },
        {
            id: "others",
            label: "Others",
            icon: "/others.svg",
        },
    ];

    const selectedOption =
        options.find((opt) => opt.id === selected) || options[0];

    return (
        <div className='student-type-dropdown'>
            <button
                className={`dropdown-trigger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='selected-option'>
                    <img
                        src={selectedOption.icon}
                        alt={selectedOption.label}
                        width={20}
                        height={20}
                    />
                    <span>{selectedOption.label}</span>
                </div>
                <Image
                    src={
                        isOpen
                            ? "/arrow-drop-down.svg"
                            : "/arrow-drop-down-right.svg"
                    }
                    alt='expand'
                    width={18}
                    height={18}
                />
            </button>
            {isOpen && (
                <div className='dropdown-options'>
                    {options.map((option) => (
                        <button
                            key={option.id}
                            className={`dropdown-option ${
                                selected === option.id ? "selected" : ""
                            }`}
                            onClick={() => {
                                setSelected(option.id);
                                setIsOpen(false);
                            }}
                        >
                            <div className='option-content'>
                                <Image
                                    src={option.icon}
                                    alt={option.label}
                                    width={20}
                                    height={20}
                                />
                                <span>{option.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
