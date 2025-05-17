"use client"

import React from 'react';
import styles from '@/app/EventHomePage/step1/page.module.css';
import EventSlider from '@/app/BigComponents/EventSliders/eventslider';
import EventPost from '@/app/BigComponents/EventPost/EventPost';
import NavBar from '@/app/BigComponents/NavBar/navbar';

const Step1 = () => {
    return (
        <main className={styles.main}>
            <div className={styles.topContainer}>
            <NavBar />
            </div>
            <div className={styles.middleContainer}>
            <EventSlider />
            </div>
            <div className={styles.bottomContainer}>
            <EventPost />
            </div>
        </main>
    );
};

export default Step1;   