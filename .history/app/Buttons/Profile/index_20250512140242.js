"use client";

import { useState } from "react";
import "./styles.css";

export function Profile({ onClick }) {
    return (
        <button
            className='profile-button'
            onClick={onClick}
        >
            <Image
                src='/profile.svg'
                alt='profile icon'
                width={32}
                height={32}
            />
        </button>
    );
}
