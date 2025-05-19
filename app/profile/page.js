"use client";
import styles from "@/app/profile/page.module.css";

import { ProfileTopNav } from "@/app/BigComponents/ProfileTopNav/ProfileTopNav"
import { PlaceholderImg_profile } from "@/app/UiElements/PlaceholderImg_profile/index"
import CommunityPost from "@/app/BigComponents/CommunityPost/communitypost";
import { HomePageNav3 } from "@/app/UiElements/HomePageNav3-profile";
export default function Profile() {


    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
                <ProfileTopNav />
                <div className={styles.info}>
                    <PlaceholderImg_profile src='/alex.svg' />
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
                        <HomePageNav3 
                        />
                    </div>
                </div>
            <section className={styles.communityPosts}>
            <CommunityPost
                            imgSm='/homePage_images/alex_smith.jpg'
                            name='Alex Smith'
                            date='Apr 7, 2025'
                            content='Hello guys, I just got in Vancouver. Anyone knows where is the best place to go in Van?'
                            imgLg='/homePage_images/alex_first_post.jpg'
                            commentPic='/homePage_images/jenny_pham.jpg'
                            commenter='Jenny Pham'
                            commentDate='Mar 31, 2025'
                            comment='I would say Granville Island. It’d have a lot of fun!!'
                        />

                        <CommunityPost
                            imgSm='/homePage_images/alex_smith.jpg'
                            name='Alex Smith'
                            date='Apr 6, 2025'
                            content='Pinoy Cravins on Edmonds St just had their soft opening last week. Super delicious and authentic Filipino cuisine!'
                            imgLg='/homePage_images/john_mendoza_post.jpg'
                            commentPic='/homePage_images/kim_sullivan.jpg'
                            commenter='Kim Sullivan'
                            commentDate='2m'
                            comment='Wow! That is amazing'
                        />
        </section>
        </section>
        
    </main>
  );
}
