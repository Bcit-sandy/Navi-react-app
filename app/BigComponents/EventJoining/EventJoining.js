"use client";
import { useState } from "react";
import styles from "./EventJoining.module.css";
import { UserCircles } from "@/app/UiElements/UserCircles";
import Button from "@/app/button/button";

export default function EventJoining({
    title = "",
    time = "",
    users = []
}) {
    const [isJoined, setIsJoined] = useState(false);
    const [isShared, setIsShared] = useState(false);

    const handleJoinClick = () => {
        setIsJoined(!isJoined);
    };

    const handleShareClick = () => {
        setIsShared(!isShared);
    };

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.title}>{title}</span>
                <Button
                    icon={isShared ? "/success.svg" : "/share.svg"}
                    className={styles.icon}
                    onClick={handleShareClick}
                />
            </div>
            <div className={styles.time}>{time}</div>
            <div className={styles.bottomRow}>
                <UserCircles users={users} />
                <Button
                    value={isJoined ? "Joined" : "Join"}
                    type={isJoined ? "success" : "primary"}
                    size="medium"
                    onClick={handleJoinClick}
                />
            </div>
        </div>
    );
}
