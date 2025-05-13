"use client";
import { useState } from "react";
import { EventDateTag } from "@/app/Buttons/EventDateTag";
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
        <main className={styles.navBar_container}>
            <div className={styles.logo}>
                <img className={styles.logo_img}
                    src='/logo_light.svg'
                    alt='logo'></img>
                <h1 className={styles.logo_text}>Navi</h1>
            </div>

            <div className={styles.icons}>
                <img className={styles.search}
                    src='/search.svg'
                    alt='search'></img>
                <img className={styles.profile}
                    src='/profile.svg'
                    alt='profile'></img>
            </div>
        </main>
    );
}
