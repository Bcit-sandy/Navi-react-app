"use client";
import "./module.button.css";
import "../globals.css";

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
        <button className={`add ${isActive ? "add-active" : ""}`} onClick={handleClick}>
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
        <button className={`community ${isActive ? "add-active" : ""}`} onClick={handleClick}>
            <img
                className='community_icon'
                src='/community.svg'
                alt='community icon'></img>
            Create Community Post
        </button>
    );
}

export function Event() {
    return (
        <button className='event'>
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

// Setting

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;
import { useState } from "react";
import Image from "next/image";

// ** SIGN UP **//
// Sign in/up button - sandy
// One blue
// One white

//** ONBOARDING **//
// radio button (description) - 2 variant (light-un, dark) - angie

// button (Let's go explore - skip) - daniel

// button (tags) - sandy

// ** HOMEPAGE **//
// Navbar (search button and profile button) - angie

// Plus button - daniel
// 2 buttons, same style, different colors

//** COMMUNITY POST **//
// heart (4 variants) 2 sizes - sandy

// comment button  2 sizes - angie

// 3 dots button - daniel

// short join button (event homepage) - 2 variants - sandy

//** POSTING COMMUNITY POST **//
// toggle button 2var - angie

export function AnonymousToggle() {
    const [toggled, setToggled] = useState(false);

    return (
        <div className='anonymousToggle'>
            <button
                className={`toggle-btn ${toggled ? "toggled" : ""}`}
                onClick={() => setToggled(!toggled)}
            >
                <div className='thumb'>
                    {toggled ? (
                        <Image
                            src='/Anonymous Icon.svg'
                            alt='anonymous on'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    ) : (
                        <Image
                            src='/Anonymous-off Icon.svg'
                            alt='anonymous off'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    )}
                </div>
            </button>
        </div>
    );
}

// image adding button - daniel

// post button - sandy

//** EVENT INFO **//
// users joining circle (image holder) - angie

// long join button - 2 variants - daniel

//** EVENT POST **//
// send button - sandy

// ** PROFILE **//
// Small Button
// Edit - angie

// Settings - daniel

// return - sandy

//** NAVBAR **//
// 2 buttons (community and events) - angie

//** BUTTONS **//
// Calendar View - daniel

// Follow - sandy

// ** CREATE EVENT **//
// Tags - same as onboarding - angie

// Round Next button - daniel

// Search button - sandy

// Back button - angie

// Pop Up leave buttons - Use buttons from Sign up page - daniel

// ** EDIT PROFILE **//
// edit circle button - sandy
// pop-up - 2 buttons, take photo, choose from library - angie

// ** SETTINGS **//
// Blue buttons with graphics inside - daniel
// Toggle Button - sandy
// Radio button - angie
