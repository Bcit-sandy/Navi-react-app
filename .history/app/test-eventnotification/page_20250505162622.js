"use client";
import { EventNotification } from "@/app/components/EventNotification/EventNotification";
import styles from "./page.module.css";

export default function EventNotificationTest() {
    return (
        <div className={styles.container}>
            <h1>Event Notification Test</h1>
            <div className={styles.section}>
                <EventNotification />
            </div>
        </div>
    );
} 