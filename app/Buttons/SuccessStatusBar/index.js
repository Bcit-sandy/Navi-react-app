"use client";

import "./styles.css";

export function SuccessStatusBar({ message, onClose }) {
    return (
        <div className="successStatusBar">
            <div className="successMessage">
                <span className="successIcon">✓</span>
                {message}
            </div>
            {onClose && (
                <button className="closeButton" onClick={onClose}>
                    ×
                </button>
            )}
        </div>
    );
}