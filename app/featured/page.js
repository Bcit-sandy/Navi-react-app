"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import Button from "@/app/button/button";
import styles from "@/app/featured/featured.module.css";
import { useRouter } from "next/navigation";

export default function Feature() {
    // default show options to false
    const [showOptions, setShowOptions] = useState(false);

    // ref detects clicks outside of the overlay
    const overlayRef = useRef(null);

    const router = useRouter();

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

    const handleCreatePost = () => {
        router.push('/CommunityHomePage/step2');
    };

    return (
        <main className={styles.screen}>
            <div className={styles.add}>
                <Button
                    type='round'
                    icon='/add.svg'
                    onClick={() => setShowOptions(true)}
                />
            </div>

            {/* && means if showoptions is truthy */}
            {showOptions && (
                <>
                    <div className={styles.overlay}></div>

                    {/* Post Options */}
                    <div
                        ref={overlayRef}
                        className={styles.optionsOverlay}
                    >
                        <Button
                            color='lightblue'
                            icon='/community.svg'
                            value='Create Community Post'
                            type='post'
                            onClick={handleCreatePost}
                            className={styles.post_type}
                        />
                        <Button
                            color='beige'
                            icon='/event.svg'
                            value='Create Event Post'
                            type='post'
                            onClick={() => console.log("Create Event Post")}
                            className={styles.post_type}
                        />
                    </div>
                </>
            )}
        </main>
    );
}