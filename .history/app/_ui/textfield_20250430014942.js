"use client";
import "./module.textfield.css";

// Email password inputs - Daniel
// Onboarding small inputs - Sandy

//** Small input box**//
// Event name - Angie

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
        <div className='community-post-textfield-wrapper'>
            <label className='community-post-label'>Event Name</label>
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
