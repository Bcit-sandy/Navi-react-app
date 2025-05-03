"use client";
import "./module.button.css";
import "../globals.css";
import { useState } from "react";

// Sign up
// Onboarding

// Let's go Explore | big button
export function Explore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`explore ${isActive ? "explore-active" : ""}`}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}>
            Let's go explore!
            <img
                className='explore_arrow'
                src='/arrow_right.svg'
                alt='right arrow'
            />
        </button>
    );
}

// small skip
export function Skip() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Skip button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`skip ${isActive ? "skip-active" : ""}`}
            onClick={handleClick}>
            Skip
        </button>
    );
}

// HomePage

// Add post
export function Add() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Add button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`add ${isActive ? "add-active" : ""}`}
            onClick={handleClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}

export function Community() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("communty button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`community ${isActive ? "community-active" : ""}`}
            onClick={handleClick}>
            <img
                className='community_icon'
                src='/community.svg'
                alt='community icon'></img>
            Create Community Post
        </button>
    );
}

export function Event() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`event ${isActive ? "event-active" : ""}`}
            onClick={handleClick}>
            <img
                className='event_icon'
                src='/event.svg'
                alt='event icon'></img>
            Create Event Post
        </button>
    );
}

// Elipses and Report
export function Elipses() {
    return (
        <button className='elipses'>
            <img
                className='elipses_icon'
                src='/elipses.svg'
                alt='three dots'></img>
        </button>
    );
}

export function Report() {
    return (
        <div className='report'>
            <div className='report_heading'>
                <p className='report_headingText'>Report</p>
                <img
                    className='report_icon'
                    src='report.svg'
                    alt='report icon'></img>
            </div>
            <div className='report_options'>
                <button className='report_button'>Not interested</button>
                <button className='report_button'>Spam</button>
                <button className='report_button'>Inappropriate content</button>
                <button className='report_button'>False information</button>
                <button className='report_buttonLast'>
                    Hate speech, discrimination
                </button>
            </div>
        </div>
    );
}

//Image add
export function ImageAdd() {
    return (
        <button className='imageAdd'>
            <img
                className='imageAdd_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}

//Event notification
export function EventNotification() {
    return (
        <div className='eventNotification'>
            <h3 className='eventNotification_text'>You have joined an event</h3>
        </div>
    );
}
// Profile

// Create Event
export function RoundNext() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };
    return (
        <button
            className={`roundNext ${isActive ? "roundNext-active" : ""}`}
            onClick={handleClick}>
            <img
                className='roundNext_icon'
                src='/arrow_right.svg'
                alt='next icon'></img>
        </button>
    );
}

export function LeaveEvent() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(button) {
        setActiveButton(button);
    }

    return (
        <div className='leaveEvent'>
            <p className='leaveEvent_text'>Do you want to leave this event?</p>
            <div className='leaveEvent_options'>
                <button
                    className={`leaveEvent_yes ${
                        activeButton === "yes"
                            ? "leaveEvent_yes-active"
                            : "leaveEvent_yes-inactive"
                    }`}
                    onClick={() => handleClick("yes")}>
                    Yes, I would like to leave
                </button>
                <button
                    className={`leaveEvent_no ${
                        activeButton === "no"
                            ? "leaveEvent_no-active"
                            : "leaveEvent_no-inactive"
                    }`}
                    onClick={() => handleClick("no")}>
                    No, I would like to stay
                </button>
            </div>
        </div>
    );
}
// Setting

export function SettingsButton() {
    return (
        <div className='settings'>
            <button className='darkMode'>
                <img
                    className='darkMode_icon'
                    src='/dark.svg'
                    alt='dark mode'></img>
                Dark Mode
            </button>
            <button className='fontSize'>
                <img
                    className='fontSize_icon'
                    src='/font.svg'
                    alt='font icon'></img>
                Font Size
            </button>
            <button className='contactUs'>
                <img
                    className='contact_icon'
                    src='/contact.svg'
                    alt='contact icon'></img>
                Dark Mode
            </button>
            <button className='darkMode'>
                <img
                    className='darkMode_icon'
                    src='/dark.svg'
                    alt='dark mode'></img>
                Dark Mode
            </button>
            <button className='darkMode'>
                <img
                    className='darkMode_icon'
                    src='/dark.svg'
                    alt='dark mode'></img>
                Dark Mode
            </button>
        </div>
    );
}

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;
