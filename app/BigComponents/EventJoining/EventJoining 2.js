"use client";
import styles from "./EventJoining.module.css";
import { Join } from "@/app/Buttons/Join";
import { UserCircles } from "@/app/Buttons/UserCircles";
import { Share } from "@/app/Buttons/Share";

export function EventJoining({
    title = "Badminton for beginner",
    time = "12:00PM - 6:00PM",
    users = [],
    onJoin,
    onShare,
}) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <Share onClick={onShare} />
            </div>
            <div className={styles.time}>{time}</div>
            <div className={styles.bottomRow}>
                <UserCircles users={users} />
                <Join
                    onClick={onJoin}
                    className={styles.longJoin}
                />
            </div>
        </div>
    );
}
