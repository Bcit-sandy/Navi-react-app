"use client";
import { useState } from "react";
import { EventDateTag } from "@/app/UiElements/EventDateTag";
import styles from "@/app/BigComponents/NavBar/navbar.module.css";
import Button from "@/app/button/button";

export default function NavBar() {
    return (
        <main className={styles.navBar_container}>
            <div className={styles.logo}>
                <img
                    className={styles.logo_img}
                    src='/logo_light.svg'
                    alt='logo'></img>
                <h1 className={styles.logo_text}>Navi</h1>
            </div>

            <div className={styles.icons}>
                <Button
                    icon="search.svg"
                    className={styles.icon}
                />
                <Button
                    icon="profile.svg"
                    className={styles.icon}
                />
            </div>
        </main>
    );
}
