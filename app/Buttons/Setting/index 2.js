"use client";
import { useState } from "react";
import "./styles.css";

export function Setting({ onClick }) {
    return (
        <button
            className='setting-button'
            onClick={onClick}
        >
            <img
                src='setting.svg'
                alt='setting icon'
                width={32}
                height={32}
            />
        </button>
    );
}
