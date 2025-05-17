import React, { useState, useRef, useEffect } from 'react';
import styles from './eventslider.module.css';
import { PlaceholderImg_event } from '../../UiElements/PlaceholderImg_event';

const EventSlider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    return (
        <div 
            className={styles.sliderContainer}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.sliderContent}>
                <div className={styles.sliderTrack}>
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className={styles.slide}>
                            <PlaceholderImg_event />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventSlider;

