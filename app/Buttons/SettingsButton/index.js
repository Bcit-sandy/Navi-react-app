"use client";
import { useState } from "react";
import "./styles.css";

export function SettingsButton() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(buttonName) {
        if (activeButton === buttonName) {
            setActiveButton(null);
        } else {
            setActiveButton(buttonName);
        }
    }

    return (
        <div className='settings'>
            <button
                className={`darkMode ${
                    activeButton === "darkMode" ? "darkMode-active" : ""
                }`}
                onClick={() => handleClick("darkMode")}>
                <img
                    className='darkMode_icon'
                    src='/dark.svg'
                    alt='dark mode'
                />
                Dark Mode
            </button>

            <button
                className={`fontSize ${
                    activeButton === "fontSize" ? "fontSize-active" : ""
                }`}
                onClick={() => handleClick("fontSize")}>
                <img
                    className='fontSize_icon'
                    src='/font.svg'
                    alt='font icon'
                />
                Font Size
            </button>

            <button
                className={`contactUs ${
                    activeButton === "contactUs" ? "contactUs-active" : ""
                }`}
                onClick={() => handleClick("contactUs")}>
                <img
                    className='contactUs_icon'
                    src='/contact.svg'
                    alt='contact icon'
                />
                Contact Us
            </button>

            <button
                className={`terms ${
                    activeButton === "terms" ? "terms-active" : ""
                }`}
                onClick={() => handleClick("terms")}>
                <img
                    className='terms_icon'
                    src='/terms.svg'
                    alt='terms'
                />
                Terms & Agreement
            </button>

            <button
                className={`logOut ${
                    activeButton === "logOut" ? "logOut-active" : ""
                }`}
                onClick={() => handleClick("logOut")}>
                <img
                    className='logOut_icon'
                    src='/logout.svg'
                    alt='leave'
                />
                Log Out
            </button>
        </div>
    );
} 