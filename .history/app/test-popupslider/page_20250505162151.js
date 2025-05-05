"use client";
import { PopupSlider } from "@/app/components/PopupSlider/PopupSlider";
import styles from "./page.module.css";

export default function PopupSliderTest() {
    return (
        <div className={styles.container}>
            <h1>Popup Slider Test</h1>
            <div className={styles.section}>
                <PopupSlider />
            </div>
        </div>
    );
} 