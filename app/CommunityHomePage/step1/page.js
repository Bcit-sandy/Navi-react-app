"use client";
import { useEffect, useRef, useState } from "react";
import NavBar from "@/app/BigComponents/NavBar/navbar";
import CommunityPost from "@/app/BigComponents/CommunityPost/communitypost";
import { HomePageNav } from "@/app/UiElements/HomePageNav";
import styles from "@/app/CommunityHomePage/step1/page.module.css";
import Feature from "@/app/featured/page";

export default function Step1() {
    return (
        <main className={styles.community_container}>
            <section className={styles.container}>
                <div className={styles.fixedNavBar}>
                    <div className={styles.navBar}>
                        <NavBar />
                    </div>
                    <div className={styles.homePageNav}>
                        <HomePageNav />
                    </div>
                </div>

                <div className={styles.addFeature}>
                    <Feature />
                </div>

                <div className={styles.main}>
                    <div className={styles.communityPost}>
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

                        <div className={styles.recommendedForYou}>
                            <div className={styles.line}></div>
                            <p>Recommended for you</p>
                        </div>

                        <CommunityPost
                            imgSm='/homePage_images/john_mendoza.png'
                            name='John Mendoza'
                            date='Apr 6, 2025'
                            content='Pinoy Cravins on Edmonds St just had their soft opening last week. Super delicious and authentic Filipino cuisine!'
                            imgLg='/homePage_images/john_mendoza_post.jpg'
                            commentPic='/homePage_images/kim_sullivan.jpg'
                            commenter='Kim Sullivan'
                            commentDate='2m'
                            comment='Wow! That is amazing'
                        />

                        <CommunityPost
                            imgSm='/homePage_images/jane_wong.jpg'
                            name='Jane Wong'
                            date='Apr 4, 2025'
                            content='Hi guys, I’m renting out an indoor basketball court every Tuesday 7-9pm. Looking to fill the spots, we typically have 6-8 spots leftover'
                            imgLg='/homePage_images/alex_first_post.jpg'
                            commentPic='/homePage_images/jessie_ju.jpg'
                            commenter='Jessie Ju'
                            commentDate='Apr 15, 2025'
                            comment='Wow leave 1 spot for me pls'
                        />

                        <CommunityPost
                            imgSm='/homePage_images/kraig_molina.jpg'
                            name='Kraig Molina'
                            date='Apr 3, 2025'
                            content='Hi all, Any recommendations for affordable grocery stores near the downtown BCIT campus?'
                            imgLg='/homePage_images//kraig_molina_post.jpg'
                            commentPic='/homePage_images/kim_sullivan.jpg'
                            commenter='Kim Sullivan'
                            commentDate='Apr 5, 2025'
                            comment='I recommend Tin Lee Market! Their prices and variety are amazing!'
                        />

                        <CommunityPost
                            imgSm='/homePage_images/harry_mcalister.jpg'
                            name='Harry Mcalister'
                            date='Feb 20, 2025'
                            content='Finally made it to Vancouver! The view is unreal. 🌊🏝️ Any must-visit spots?'
                            imgLg='/homePage_images/harry_mcalister_post.jpg'
                            commentPic='/homePage_images/jenny_pham.jpg'
                            commenter='Jenny Pham'
                            commentDate='Mar 31, 2025'
                            comment='I would say Granville Island. It’d have a lot of fun!!'
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
