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
                width={32}
                height={32}
            />

            <img
                src='/comment.svg'
                alt='comment icon'
                width={28}
                height={28}
            />
        </button>
    );
}
