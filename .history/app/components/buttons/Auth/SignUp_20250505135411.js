"use client";
import { useState } from "react";
import "./SignUp.css";

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