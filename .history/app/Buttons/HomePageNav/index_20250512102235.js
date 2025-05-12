"use client";

import { useState } from "react";
import "./styles.css";

// 2 buttons (community and events)
export function HomePageNav() {
    const [activeLink, setActiveLink] = useState("community");

    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <button
                    className={`nav-link ${
                        activeLink === "community" ? "active" : ""
                    }`}
                    onClick={() => setActiveLink("community")}
                >
                    Community
                </button>
                <button
                    className={`nav-link ${
                        activeLink === "events" ? "active" : ""
                    }`}
                    onClick={() => setActiveLink("events")}
                >
                    Events
                </button>
            </div>
        </nav>
    );
}
