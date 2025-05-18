"use client";
import "./styles.css";
import "../../globals.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function SearchBar({ placeholder = "Search here", onChange }) {
    return (
        <div className="search-container">
            <Image 
                src="/search.svg" 
                alt="search icon"
                width={20}
                height={20}
                className="search-icon"
            />
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
} 