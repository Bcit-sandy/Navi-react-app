"use client";
import { useState } from "react";
import styles from "./Tabs.module.css";

export function Tabs({ 
    tabs,
    defaultActiveTab = 0
}) {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <div className={styles.tabsContainer}>
            <div className={styles.tabsHeader}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${styles.tab} ${activeTab === index ? styles.active : ""}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className={styles.tabsContent}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
} 