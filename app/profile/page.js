"use client";
import styles from "@/app/profile/page.module.css";
import Button from "@/app/button/button";
import { ProfileTopNav } from "../BigComponents/ProfileTopNav/ProfileTopNav";
import { PlaceholderImg_profile } from "@/app/UiElements/PlaceholderImg_profile/index"
import { HomePageNav } from "../UiElements/HomePageNav";

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
                    <HomePageNav />
                </div>
            </div>
            
        </section>
    </main>
  );
}