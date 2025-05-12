"use client";

import { useState } from "react";
import "./styles.css";

export function Search({ onClick }) {
    return (
        <button
            className='search-button'
            onClick={onClick}
        >
            <Image
                src='search.svg'
                alt='search icon'
                width={32}
                height={32}
            />
        </button>
    );
}
