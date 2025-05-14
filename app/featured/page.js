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
        <main>
            <Buttons.Add onClick={() => setShowOptions(true)} />

            {/* && means if showoptions is truthy */}
            {showOptions && (
                <>
                    {}
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            zIndex: 999,
                        }}
                    />

                    {/* Options Overlay */}
                    <div
                        ref={overlayRef}
                        style={{
                            position: "absolute",
                            top: "100px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 1000,
                        }}>
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
