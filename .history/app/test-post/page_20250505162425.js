"use client";
import { Post } from "@/app/components/Post/Post";
import styles from "./page.module.css";

export default function PostTest() {
    return (
        <div className={styles.container}>
            <h1>Post Button Test</h1>
            <div className={styles.section}>
                <Post />
                <Post label="Create Post →" />
            </div>
        </div>
    );
} 