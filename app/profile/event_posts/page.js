"use client";
import styles from "@/app/profile/event_posts/page.module.css";
import { ProfileTopNav } from "@/app/BigComponents/ProfileTopNav/ProfileTopNav"
import { PlaceholderImg_profile } from "@/app/UiElements/PlaceholderImg_profile/index"
import { HomePageNav3 } from "@/app/UiElements/HomePageNav3-profile";
import EventPost from '@/app/BigComponents/EventPost/EventPost';

export default function Profile() {
  return (
    <main className={styles.main_container}>
        <section className={styles.container}>
            <ProfileTopNav />
            <div className={styles.info}>
                <PlaceholderImg_profile src="/alex.svg" />
                <div className={styles.follow_section}>
                    <p className={styles.followers}>0 Followers</p>
                    <p className={styles.following}>0 Following</p>
                </div>

                <div className={styles.name}>
                <h1>Alex Smith</h1>
                <p>@alexsmith21</p>
                </div>
                
                <div className={styles.statusAndLocation}>
                    <div className={styles.status}>
                        <img
                        src='/education.svg'
                        alt='grad hat'
                        width={20}
                        height={20}
                    />
                    <span>Post-Grad</span>
                    </div>
                    <div className={styles.status}>
                        <img
                        src='/location.svg'
                        alt='location'
                        width={20}
                        height={20}
                        />
                        <span>Burnaby</span>
                    </div>
                </div>

                <div className={styles.bio}>
                    <p>Hi, this is Alex from Japan! Nice to meet you all</p>
                </div>

                <div className={styles.navBar}>
                    <HomePageNav3 />
                </div>
            </div>
          
            <div className={styles.eventPosts}>
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
                        </div>
  
        </section>
        
    </main>
  );
}