"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import AddOptions from "@/app/Buttons/AddOptions/AddOptions";
import styles from "@/app/featured/featured.module.css";

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
            <button
                className={styles.add}
                onClick={() => setShowOptions(true)}>
                <img
                    src='/add.svg'
                    className='addButton'
                    alt='Add'
                />
            </button>

            {/* && means if showoptions is truthy */}
            {showOptions && (
                <>
                    {}
                    <div className={styles.overlay}></div>

                    {/* Post Options */}
                    <div
                        ref={overlayRef}
                        className={styles.optionsOverlay}>
                        <AddOptions
                            icon='/community.svg'
                            value='Create Community Post'
                            bgColor='var(--analogous-blue-300)'
                            color='var(--neutral-blue-500)'
                            className='post_type'
                        />
                        <AddOptions
                            icon='/event.svg'
                            value='Create Event Post'
                            bgColor='var(--secondary-beige-300)'
                            color='var(--secondary-beige-900)'
                            className='post_type'
                        />
                    </div>
                </>
            )}
        </main>
    );
}
