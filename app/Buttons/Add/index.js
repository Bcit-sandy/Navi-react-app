"use client";
import { useState } from "react";
import "./styles.css";

export function Add({ onClick }) {

    return (
        <button className='add'
            onClick={onClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}