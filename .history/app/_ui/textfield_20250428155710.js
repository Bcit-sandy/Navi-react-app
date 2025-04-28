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
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="username-field">
            <div className={`username-container ${isFocused ? 'focused' : ''} ${error ? 'error' : ''}`}>
                <input
                    type="text"
                    className="username-input"
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    aria-label={label}
                    aria-required={required}
                    aria-invalid={!!error}
                />
            </div>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
}

// ** Medium input box **//
// Description - Sandy
// Community post - Angie
// Edit Bio - Daniel