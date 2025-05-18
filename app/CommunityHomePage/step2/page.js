"use client";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/CommunityHomePage/step2/page.module.css";
import { AnonymousToggle } from "@/app/UiElements/AnonymousToggle";
import { CommunityPostTextField } from "@/app/components/textfield";
import { ImageAdd } from "@/app/UiElements/ImageAdd";
import Button from "@/app/button/button";

export default function Step2() {
    return (
        <main className={styles.community_container}>
            <section className={styles.container}>
                <div className={styles.nav}>
                    <img
                        className={styles.return}
                        src='/return.svg'
                        alt='return'
                    ></img>
                    <h1>Posting</h1>
                </div>
                <div className={styles.main}>
                    <div className={styles.profileName_and_toggle}>
                        <div className={styles.author}>
                            <img
                                src='/homepage_images/alex_smith.jpg'
                                alt='name'
                                className={styles.smallImage}
                            />
                            <div className={styles.postInfo}>
                                <p className={styles.name}>Alex Smith</p>
                            </div>
                        </div>
                        <AnonymousToggle className={styles.toggle} />
                    </div>

                    <CommunityPostTextField />

                    <div className={styles.imageAdding}>
                        <h2>Image</h2>
                        <p>Add image to your post</p>
                        <ImageAdd />
                    </div>
                    <div className={styles.post_button}>
                        <Button
                            size='medium'
                            type='primary'
                            value='Post →'
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
