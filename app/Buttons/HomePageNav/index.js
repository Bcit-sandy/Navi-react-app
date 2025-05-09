"use client";

import { useState } from "react";
import "./styles.css";

export default function HomePageNav({ onNavigate }) {
    const [activeTab, setActiveTab] = useState("home");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (onNavigate) {
            onNavigate(tab);
        }
    };

    return (
        <nav className="homePageNav">
            <button 
                className={`navItem ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleTabClick('home')}
            >
                <img src="/home.svg" alt="Home" />
                <span>Home</span>
            </button>
            <button 
                className={`navItem ${activeTab === 'explore' ? 'active' : ''}`}
                onClick={() => handleTabClick('explore')}
            >
                <img src="/explore.svg" alt="Explore" />
                <span>Explore</span>
            </button>
            <button 
                className={`navItem ${activeTab === 'events' ? 'active' : ''}`}
                onClick={() => handleTabClick('events')}
            >
                <img src="/events.svg" alt="Events" />
                <span>Events</span>
            </button>
            <button 
                className={`navItem ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleTabClick('profile')}
            >
                <img src="/profile.svg" alt="Profile" />
                <span>Profile</span>
            </button>
        </nav>
    );
} 