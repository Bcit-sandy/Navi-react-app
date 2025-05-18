"use client";
import { useRouter } from "next/navigation";
import Button from "@/app/button/button";
import styles from "./ProfileTopNav.module.css";

export function ProfileTopNav() {
    const router = useRouter();

    const handleReturn = () => {
        router.back();
    };

    return (
        <div className={styles.topNav}>
            <Button
                icon="/return.svg"
                className={styles.icon}
                onClick={handleReturn}
            />
            <div className={styles.rightButtons}>
                <Button
                    icon="/edit.svg"
                    className={styles.icon2}
                />
                <Button
                    icon="/settings.svg"
                    className={styles.icon3}
                />
            </div>
        </div>
    );
}
