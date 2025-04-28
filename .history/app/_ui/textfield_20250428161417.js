import "./module.textfield.css";
import Image from "next/image";
import { useState } from "react";

// Email password inputs - Daniel

// Onboarding small inputs - Sandy
export function Username({ 
    placeholder = "@Type here", 
    onChange,
    error = "",
    required = true
}) {

    return (
        <div className="username-field">
            <div className={`username-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
                <input
                    type="text"
                    className="username-input"
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </div>
    );
}

// ** Medium input box **//
// Description - Sandy
// Community post - Angie
// Edit Bio - Daniel