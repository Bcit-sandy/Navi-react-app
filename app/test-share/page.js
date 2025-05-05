"use client";
import { Share } from "@/app/components/Share/Share";
import styles from "./page.module.css";

export default function ShareTest() {
    return (
        <div className={styles.container}>
            <h1>Share Button Test</h1>
            <div className={styles.section}>
                <Share />
            </div>
        </div>
    );
} 