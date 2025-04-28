import "./module.textfield.css";
import Image from "next/image";

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


//** Small input box**// 
// Event name - Angie
// Participant limit - Daniel


// ** Medium input box **//
// Description - Sandy
// Community post - Angie
// Edit Bio - Daniel