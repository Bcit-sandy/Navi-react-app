"use client";
import { useState } from "react";
import styles from "./SettingsButton.module.css";

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
        <div className={styles.settings}>
            <button
                className={`${styles.darkMode} ${
                    activeButton === "darkMode" ? styles.darkModeActive : ""
                }`}
                onClick={() => handleClick("darkMode")}>
                <img
                    className={styles.darkModeIcon}
                    src='/dark.svg'
                    alt='dark mode'
                />
                Dark Mode
            </button>

            <button
                className={`${styles.fontSize} ${
                    activeButton === "fontSize" ? styles.fontSizeActive : ""
                }`}
                onClick={() => handleClick("fontSize")}>
                <img
                    className={styles.fontSizeIcon}
                    src='/font.svg'
                    alt='font icon'
                />
                Font Size
            </button>

            <button
                className={`${styles.contactUs} ${
                    activeButton === "contactUs" ? styles.contactUsActive : ""
                }`}
                onClick={() => handleClick("contactUs")}>
                <img
                    className={styles.contactUsIcon}
                    src='/contact.svg'
                    alt='contact icon'
                />
                Contact Us
            </button>

            <button
                className={`${styles.terms} ${
                    activeButton === "terms" ? styles.termsActive : ""
                }`}
                onClick={() => handleClick("terms")}>
                <img
                    className={styles.termsIcon}
                    src='/terms.svg'
                    alt='terms'
                />
                Terms & Agreement
            </button>

            <button
                className={`${styles.logOut} ${
                    activeButton === "logOut" ? styles.logOutActive : ""
                }`}
                onClick={() => handleClick("logOut")}>
                <img
                    className={styles.logOutIcon}
                    src='/logout.svg'
                    alt='leave'
                />
                Log Out
            </button>
        </div>
    );
} 