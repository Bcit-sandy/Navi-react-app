"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import Button from "@/app/button/button";
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
            <Button
                type="round"
                icon="/add.svg"
                onClick={() => setShowOptions(true)}
            />

            {/* && means if showoptions is truthy */}
            {showOptions && (
                <>
                    <div className={styles.overlay}></div>

                    {/* Post Options */}
                    <div
                        ref={overlayRef}
                        className={styles.optionsOverlay}>
                        <Button
                            type="primary"
                            icon="/community.svg"
                            value="Create Community Post"
                            onClick={() => console.log("Create Community Post")}
                        />
                        <Button
                            type="primary"
                            icon="/event.svg"
                            value="Create Event Post"
                            onClick={() => console.log("Create Event Post")}
                        />
                    </div>
                </>
            )}
        </main>
    );
}
