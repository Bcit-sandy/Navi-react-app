"use client";
import { useEffect, useState, useRef } from "react";
import "./styles.css";

export function EventNotification() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const animationRef = useRef(null);

    useEffect(() => {
        startAnimation();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const startAnimation = () => {
        setProgress(0);
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const current = Math.min(100, (elapsed / duration) * 100);

            setProgress(current);

            if (current < 100) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setIsVisible(false);
                }, 500);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    if (!isVisible) return null;

    return (
        <div className="notification-container">
            <div className="eventNotification">
                <h3 className="eventNotification_text">You have joined an event</h3>
                <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
} 