"use client";

import { useState } from "react";
import "./styles.css";

export function Join({ isJoined = false, onClick }) {
    return (
        <button 
            className={`join-button ${isJoined ? 'join-button--joined' : ''}`}
            onClick={onClick}
        >
            {isJoined ? "Joined" : "Join"}
        </button>
    );
}