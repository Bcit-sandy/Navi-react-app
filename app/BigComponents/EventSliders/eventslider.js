"use client"

import React from 'react';
import { useState, useRef } from 'react';
import styles from './eventslider.module.css';

const EventSlider = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef(null);

    const events = [
        {
            image: '/event.jpg',
            title: 'Events Today',
            description: 'Join us for exciting events happening today!'
        },
        {
            image: '/sport.jpg',
            title: 'Volleyball',
            description: 'Join our volleyball event for a fun and competitie experience!'
        },
        {
            image: '/leader.jpg',
            title: 'Leadership Conference',
            description: 'Insights on innovation and leadership with a focused audience'
        },
        {
            image: '/firework.jpg',
            title: 'Spring Festival',
            description: 'Join us for exciting events happening today!'
        }
    ];

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
                    {events.map((event, index) => (
                        <div key={index} className={styles.slide}>
                            <img 
                                src={event.image} 
                                alt={event.title}
                                className={styles.eventImage}
                            />
                            <h3 className={styles.eventTitle}>{event.title}</h3>
                            <div className={styles.descriptionContainer}>
                                <p className={styles.eventDescription}>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventSlider;

