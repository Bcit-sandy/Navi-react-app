"use client"

import React from 'react';
import styles from '@/app/EventHomePage/step1/page.module.css';
import EventSlider from '@/app/BigComponents/EventSliders/eventslider';
import EventPost from '@/app/BigComponents/EventPost/EventPost';
import NavBar from '@/app/BigComponents/NavBar/navbar';
import { HomePageNav2 } from "@/app/UiElements/HomePageNav2";

const Step1 = () => {
    return (
        <main className={styles.community_container}>
               <section className={styles.container}>
            <div className={styles.main}>
            <div className={styles.topContainer}>
                <NavBar />
                </div>
                <div className={styles.homePageNav}>
                        <HomePageNav2 />
                </div>
                <div className={styles.middleContainer}>
                    <div className={styles.eventSliderContainer}>
                    <EventSlider />
                    </div>
                </div>
                <div className={styles.bottomContainer}>
                <EventPost />
                </div>
            </div>
            </section>
        </main>
    );
};

export default Step1;   