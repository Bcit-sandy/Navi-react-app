"use client";

import { useState } from "react";
import "./styles.css";

export function TakePhotoButton({ onClick }) {
    return (
        <button
            className='photo-button'
            onClick={onClick}
        >
            <div className='photo-icon'>
                <Image
                    src='/camera.svg'
                    alt='Camera'
                    width={24}
                    height={24}
                />
            </div>
            <span>Take a photo</span>
        </button>
    );
}
