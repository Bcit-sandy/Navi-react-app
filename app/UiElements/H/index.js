"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

// 2 buttons (community and events)
export function HomePageNav2() {
    const [activeLink, setActiveLink] = useState("events");
    const router = useRouter();

    const handleEventsClick = () => {
        setActiveLink("events");
        router.push('/EventHomePage/step1');
    };

    const handleCommunityClick = () => {
        setActiveLink("community");
        router.push('/CommunityHomePage/step1');
    };

    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <button
                    className={`nav-link ${
                        activeLink === "community" ? "active" : ""
                    }`}
                    onClick={handleCommunityClick}
                >
                    Community
                </button>
                <button
                    className={`nav-link ${
                        activeLink === "events" ? "active" : ""
                    }`}
                    onClick={handleEventsClick}
                >
                    Events
                </button>
            </div>
        </nav>
    );
}
