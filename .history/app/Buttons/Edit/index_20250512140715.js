"use client";

import { useState } from "react";
import "./styles.css";

export function Edit({ onClick }) {
    export function Edit({ onClick }) {
        return (
            <button
                className='edit-button'
                onClick={onClick}
            >
                <Image
                    src='/edit.svg'
                    alt='edit icon'
                    width={32}
                    height={32}
                />
            </button>
        );
    }