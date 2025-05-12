"use client";
import "./styles.css";
import "../../globals.css";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function Delete({ onClick }) {
    return (
        <button
            className='delete-button'
            onClick={onClick}
        >
            <img
                src='/delete.svg'
                alt='delete icon'
                width={27}
                height={27}
            />

            <img
                src='/delete.svg'
                alt='delete icon'
                width={20}
                height={20}
            />
        </button>
    );
}
