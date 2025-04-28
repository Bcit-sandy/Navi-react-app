import "./module.textfield.css";
import Image from "next/image";

// Email password inputs - Daniel

// Onboarding small inputs - Sandy
export function SignUp({ label = "Sign Up", onClick }) {
    return (
        <button 
            className="signup-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}


//** Small input box**// 
// Event name - Angie
// Participant limit - Daniel


// ** Medium input box **//
// Description - Sandy
// Community post - Angie
// Edit Bio - Daniel