"use client";
import { Explore, Skip, Add } from "@/app/components/buttons/buttons";
import styles from "./page.module.css";

export default function ExploreSkipAddTest() {
    return (
        <div className={styles.container}>
            <h1>Explore, Skip, and Add Buttons Test</h1>
            
            <div className={styles.section}>
                <h2>Explore Button</h2>
                <Explore />
            </div>

            <div className={styles.section}>
                <h2>Skip Button</h2>
                <Skip />
            </div>

            <div className={styles.section}>
                <h2>Add Button</h2>
                <Add />
            </div>
        </div>
    );
} 