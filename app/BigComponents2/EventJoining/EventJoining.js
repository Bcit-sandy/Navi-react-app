"use client";
import styles from "./EventJoining.module.css";
import { Join } from "@/app/Buttons/Join";
import { UserCircles } from "@/app/Buttons/UserCircles";
import { Share } from "@/app/Buttons/Share";
import Button from "@/app/button/button";
import classNames from "classnames";

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
                <Button
                    icon="share.svg"
                    className={styles.icon}
                />
            </div>
            <div className={styles.time}>{time}</div>
            <div className={styles.bottomRow}>
                <UserCircles users={users} />
                <Button
                    value="Join"
                    type="primary"
                />
            </div>
        </div>
    );
}
