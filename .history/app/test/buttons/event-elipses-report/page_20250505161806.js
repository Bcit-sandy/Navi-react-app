"use client";
import { Event, Elipses, Report } from "@/app/components/buttons/buttons";
import styles from "./page.module.css";

export default function EventElipsesReportTest() {
    return (
        <div className={styles.container}>
            <h1>Event, Elipses, and Report Buttons Test</h1>
            
            <div className={styles.section}>
                <h2>Event Button</h2>
                <Event />
            </div>

            <div className={styles.section}>
                <h2>Elipses Button</h2>
                <Elipses />
            </div>

            <div className={styles.section}>
                <h2>Report Button</h2>
                <Report />
            </div>
        </div>
    );
} 