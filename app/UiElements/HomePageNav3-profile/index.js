"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles.css";

// 2 buttons (community and events)
export function HomePageNav3() {
    const [activeLink, setActiveLink] = useState("community");
    const router = useRouter();

    const handleCommunityClick = () => {
        setActiveLink("community");
        router.push('/profile');
    };

    const handleEventsClick = () => {
        setActiveLink("events");
        router.push('/profile/event_posts');
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
