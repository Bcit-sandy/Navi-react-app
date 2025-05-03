"use client";
import "./module.button.css";
import "../globals.css";
import { useState } from "react";

// Sign up
// Onboarding

// Let's go Explore | big button
export function Explore() {
    return (
        <button className='explore'>
            Let's go explore!
            <img
                className='explore_arrow'
                src='/arrow_right.svg'
                alt='right arrow'></img>
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
    return (
        <button className='add'>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}

export function Community() {
    return (
        <button className='community'>
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
export function EventNotification(){
    return (
        <div className='eventNoti'>
            <h3 className=""
        </div>
    );
}
// Profile

// Create Event

// Setting

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;
