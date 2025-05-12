"use client";

import { useState } from "react";
import "./styles.css";

export function ChoosePhotoButton({ onClick }) {
    return (
        <button
            className='photo-button'
            onClick={onClick}
        >
            <div className='photo-icon'>
                <Image
                    src='/picture.svg'
                    alt='Gallery'
                    width={24}
                    height={24}
                />
            </div>
            <span>Choose from library</span>
        </button>
    );
}
