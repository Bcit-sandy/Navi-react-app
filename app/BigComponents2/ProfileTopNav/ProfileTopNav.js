"use client";
import Button from "@/app/button/button";
import styles from "./ProfileTopNav.module.css";

export function ProfileTopNav() {
    return (
        <div className={styles.topNav}>
            <Button
                icon="return.svg"
                className={styles.icon}
            />
            <div className={styles.rightButtons}>
                <Button
                    icon="edit.svg"
                    className={styles.icon}
                />
                <Button
                    icon="setting.svg"
                    className={styles.icon}
                />
            </div>
        </div>
    );
}
