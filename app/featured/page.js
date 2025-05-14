"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import AddOptions from "../Buttons/AddOptions/AddOptions";
import * as Buttons from "../Buttons/allbuttons";
import styles from "./featured.module.css";

export default function Page() {
    // default show options to false
    const [showOptions, setShowOptions] = useState(false);

    // ref detects clicks outside of the overlay
    const overlayRef = useRef(null);

    // Close when clicking outside the overlay, using event listener
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(event.target)
            ) {
                setShowOptions(false);
            }
        }

        if (showOptions) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showOptions]);

    return (
        <main className={styles.screen}>

            <Buttons.Add
                className={styles.add}
                onClick={() => setShowOptions(true)}
            />

            {/* && means if showoptions is truthy */}
            {showOptions && (
                <>
                    {}
                    <div className={styles.overlay}></div>

                    {/* Options Overlay */}
                    <div
                        ref={overlayRef}
                        className={styles.optionsOverlay}>
                        <AddOptions
                            icon='/community.svg'
                            value='Create Community Post'
                            bgColor='var(--analogous-blue-300)'
                            color='var(--neutral-blue-500)'
                        />
                        <AddOptions
                            icon='/event.svg'
                            value='Create Event Post'
                            bgColor='var(--secondary-beige-300)'
                            color='var(--secondary-beige-900)'
                        />
                    </div>
                </>
            )}
        </main>
    );
}
