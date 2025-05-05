"use client";
import { useState } from "react";
import { Join } from "@/app/components/Join/Join";
import styles from "./page.module.css";

export default function JoinTest() {
    const [isJoined, setIsJoined] = useState(false);

    return (
        <div className={styles.container}>
            <h1>Join Button Test</h1>
            <div className={styles.section}>
                <Join 
                    isJoined={isJoined}
                    onClick={() => setIsJoined(!isJoined)}
                />
            </div>
        </div>
    );
} 