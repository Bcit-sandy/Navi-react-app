"use client";
import styles from "./Report.module.css";

export function Report() {
    return (
        <div className={styles.report}>
            <div className={styles.reportHeading}>
                <p className={styles.reportHeadingText}>Report</p>
                <img
                    className={styles.reportIcon}
                    src='report.svg'
                    alt='report icon'
                />
            </div>
            <div className={styles.reportOptions}>
                <button className={styles.reportButton}>Not interested</button>
                <button className={styles.reportButton}>Spam</button>
                <button className={styles.reportButton}>Inappropriate content</button>
                <button className={styles.reportButton}>False information</button>
                <button className={styles.reportButtonLast}>
                    Hate speech, discrimination
                </button>
            </div>
        </div>
    );
} 