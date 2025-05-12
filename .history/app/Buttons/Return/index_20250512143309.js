"use client";

import { useState } from "react";
import "./styles.css";

export function Return({ onClick }) {
    return (
        <button 
            className="return-button"
            onClick={onClick}
        >
            <img 
                src="/return.svg" 
                alt="return icon"
                width={25}
                height={25}
            />
        </button>
    );
}