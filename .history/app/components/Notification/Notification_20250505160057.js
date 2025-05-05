"use client";
import Image from "next/image";
import styles from "./Notification.module.css";

export function Notification({ 
    type = "info",
    message,
    onClose 
}) {
    return (
        <div className={`${styles.notification} ${styles[type]}`}>
            <div className={styles.notificationContent}>
                <Image 
                    src={`/${type}.svg`}
                    alt={`${type} icon`}
                    width={24}
                    height={24}
                    className={styles.notificationIcon}
                />
                <span className={styles.notificationMessage}>{message}</span>
            </div>
            <button 
                className={styles.closeButton}
                onClick={onClose}
            >
                <Image 
                    src="/close.svg"
                    alt="close icon"
                    width={16}
                    height={16}
                />
            </button>
        </div>
    );
} 