"use client";
import { SettingsButton } from "@/app/components/SettingsButton/SettingsButton";
import styles from "./page.module.css";

export default function SettingsButtonTest() {
    return (
        <div className={styles.container}>
            <h1>Settings Button Test</h1>
            <div className={styles.section}>
                <SettingsButton />
            </div>
        </div>
    );
} 