"use client";
import { useState } from "react";
import "./styles.css";

export function Add({ onClick, className }) {

    return (
        <button className={className}
            onClick={onClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}