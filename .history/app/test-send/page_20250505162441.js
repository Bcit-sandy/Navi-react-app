"use client";
import { Send } from "@/app/components/Send/Send";
import styles from "./page.module.css";

export default function SendTest() {
    return (
        <div className={styles.container}>
            <h1>Send Button Test</h1>
            <div className={styles.section}>
                <Send onClick={() => console.log("Send button clicked")} />
            </div>
        </div>
    );
} 