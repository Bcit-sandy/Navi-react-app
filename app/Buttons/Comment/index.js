"use client";

import { useState } from "react";
import "./styles.css";

export function Comment({ onClick }) {
    return (
        <button
            className='comment-button'
            onClick={onClick}
        >
            <img
                src='/comment.svg'
                alt='comment icon'
                width={24}
                height={24}
            />
        </button>
    );
}
