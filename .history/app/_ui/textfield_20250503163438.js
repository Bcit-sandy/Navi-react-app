"use client";
import "./module.textfield.css";
import Image from "next/image";
import { useState } from "react";

// Email password inputs - Daniel

// Onboarding small inputs - Sandy
export function Username({ placeholder = "Type here", onChange }) {
    return (
        <div className="username-container">
            <input
                type="text"
                className="username-input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

// Comment textfield - Sandy
export function Comment({ placeholder = "Comment...", onChange }) {
    return (
        <div className="comment-container">
            <textarea
                className="comment-input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}


//** Small input box**//
// Event name - Angie
export function EventsPostTextField({
    value,
    onChange,
    placeholder = "Type here",
}) {
    return (
        <div className='events-post-textfield-wrapper'>
            <label className='events-post-label'>Event Name</label>
            <input
                className='events-post-textfield'
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
// Participant limit - Daniel

// ** Medium input box **//
// Description - Sandy
// Community post - Angie
export function CommunityPostTextField({
    value,
    onChange,
    placeholder = "What do you think...",
}) {
    return (
        <input
            className='community-post-textfield'
            type='text'
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

// Edit Bio - Daniel
