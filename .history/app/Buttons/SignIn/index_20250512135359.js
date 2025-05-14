"use client";

import { useState } from "react";
import "./styles.css";

export function SignIn({ label = "Sign In", onClick }) {
    return (
        <button 
            className="signin-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}     