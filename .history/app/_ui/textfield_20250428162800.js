import "./module.textfield.css";
import Image from "next/image";
import { useState } from "react";

// Email password inputs - Daniel

// Onboarding small inputs - Sandy
export function Username({ 
    placeholder = "hi", 
    onChange
}) {
    return (
        <div className="username-field">
                <input
                    type="text"
                    className="username-input"
                    placeholder={placeholder}
                    onChange={onChange}
                />
        </div>
    );
}

// ** Medium input box **//
// Description - Sandy
// Community post - Angie
// Edit Bio - Daniel