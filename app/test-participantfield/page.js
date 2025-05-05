"use client";
import { ParticipantField } from "@/app/components/ParticipantField/ParticipantField";
import styles from "./page.module.css";

export default function ParticipantFieldTest() {
    return (
        <div className={styles.container}>
            <h1>Participant Field Test</h1>
            <div className={styles.section}>
                <ParticipantField />
            </div>
        </div>
    );
} 