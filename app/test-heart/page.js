"use client";
import { useState } from "react";
import { Heart } from "@/app/components/Heart/Heart";
import styles from "./page.module.css";

export default function HeartTest() {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className={styles.container}>
            <h1>Heart Button Test</h1>
            <div className={styles.section}>
                <h2>Small Heart</h2>
                <Heart 
                    size="small"
                    isLiked={isLiked}
                    onClick={() => setIsLiked(!isLiked)}
                />
                
                <h2>Large Heart</h2>
                <Heart 
                    size="large"
                    isLiked={isLiked}
                    onClick={() => setIsLiked(!isLiked)}
                />
            </div>
        </div>
    );
} 