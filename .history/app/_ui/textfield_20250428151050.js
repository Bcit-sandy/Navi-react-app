import "./module.textfield.css";
import Image from "next/image";

// Email password inputs - Daniel

// Onboarding small inputs - Sandy
export function SearchBar({ placeholder = "Search here", onChange }) {
    return (
        <div className="search-container">
            <Image 
                src="/search.svg" 
                alt="search icon"
                width={20}
                height={20}
                className="search-icon"
            />
            <input
                type="text"
                className="search-input"
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