"use client"

import React from 'react';
import styles from '@/app/EventHomePage/step1/page.module.css';
import EventSlider from '@/app/BigComponents/EventSliders/eventslider';
import EventPost from '@/app/BigComponents/EventPost/EventPost';
import NavBar from '@/app/BigComponents/NavBar/navbar';
import { HomePageNav2 } from "@/app/UiElements/H";
import Feature from "@/app/featured/page";


const Step1 = () => {
    return (
        <main className={styles.community_container}>
            <section className={styles.container}>
                <div className={styles.fixedNavBar}>
                    <div className={styles.topContainer}>
                        <NavBar />
                    </div>
                    <div className={styles.homePageNav2}>
                        <HomePageNav2 />
                    </div>
                </div>

                <div className={styles.addFeature}>
                    <Feature />
                </div>

                <div className={styles.main}>
                    <div className={styles.middleContainer}>
                        <div className={styles.eventSliderContainer}>
                        <EventSlider />
                        </div>
                    </div>
                    <div className={styles.bottomContainer}>
                        <div className={styles.eventPostContainer}>
                            <EventPost
                                date = "08"
                                month = "APR"
                                title = "Badminton (beginner)"
                                tags = "Sports, Badminton"
                                location = "Richmond, BC"
                                maxParticipants = "30"
                                time = "12:00 PM – 6:00 PM"
                                image = "/event/event1.jpg"
                                />
                        </div>

                        <div className={styles.eventPostContainer}>
                            <EventPost
                                date = "30"
                                month = "MAR"
                                title = "Spring Festival"
                                tags = "Food,Carnival, Games"
                                location = "Burnaby, BC"
                                maxParticipants = "300"
                                time = "10:00 AM – 8:00 PM"
                                image = "/event/event2.jpg"
                                />
                        </div>


                        <div className={styles.eventPostContainer}>
                            <EventPost
                                date = "20"
                                month = "DEC"
                                title = "Music & Lights Festival"
                                tags = "Music, Dance, Performance"
                                location = "Downtown Vancouver, BC"
                                maxParticipants = "300"
                                time = "6:00 PM – 11:00 PM"
                                image = "/event/event3.jpg"
                                />
                        </div>

                        <div className={styles.eventPostContainer}>
                            <EventPost
                                date = "10"
                                month = "OCT"
                                title = "Autumn Art Expo"
                                tags = "Art, Exhibition, Creativity"
                                location = "Langley, BC"
                                maxParticipants = "50"
                                time = "11:00 AM – 7:00 PM"
                                image = "/event/event4.jpg"
                                />
                        </div>

                        <div className={styles.eventPostContainer}>
                            <EventPost
                                date = "22"
                                month = "SEP"
                                title = "Tech Innovators Meetup"
                                tags = "Technology, Networking, AI"
                                location = "Vancouver, BC"
                                maxParticipants = "200"
                                time = "5:00 PM – 9:00 PM"
                                image = "/event/event5.jpg"
                                />
                        </div>
                    
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Step1;   