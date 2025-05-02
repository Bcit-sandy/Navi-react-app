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

// Comment textfield - Sandy
export function Comment({ placeholder = "Comment...", onChange }) {
    return (
        <div className="comment-container">
            <textarea
                className="comment-input"
                placeholder={placeholder}
                onChange={onChange}
                rows={3}
            />
        </div>
    );
}


