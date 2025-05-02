"use client";
import "./module.textfield.css";
import { useState } from "react";

// Email password inputs - Daniel
// Onboarding small inputs - Sandy

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
    placeholder = "Type here",
}) {
    return (
            <input
                className='community-post-textfield'
                type='text'
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}

// Edit Bio - Daniel
