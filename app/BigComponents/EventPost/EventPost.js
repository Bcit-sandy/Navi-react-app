"use client";
import Image from "next/image";
import {useState} from "react";
import { useRouter } from "next/navigation";
import { EventDateTag } from "@/app/UiElements/EventDateTag";
import styles from "./EventPost.module.css";
import Button from "@/app/button/button";

export default function EventPost({
    date = "01",
    month = "JAN",
    title = "Badminton (beginner)",
    tags = "Sports, Badminton",
    location = "Richmond, BC",
    maxParticipants = "30",
    time = "12:00 PM – 6:00 PM",
    image = "/placeholder.png",
}) {
    const [isJoined, setIsJoined] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const router = useRouter();

    const handleJoinClick = (e) => {
        e.stopPropagation();
        setIsJoined(!isJoined);
    };

    const handleShareClick = (e) => {
        e.stopPropagation();
        setIsShared(!isShared);
    };

    const handleCardClick = () => {
        router.push('/EventHomePage/step2');
    };

    return (
        <div className={styles.card} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <div className={styles.headerRow}>
                <div className={styles.dateTag}>
                    <EventDateTag
                        date={date}
                        month={month}
                    />
                </div>
                <div className={styles.infoSection}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.tags}>Tags: {tags}</p>
                    <p className={styles.location}>{location}</p>
                    <p className={styles.maxParticipants}>
                        Max Participants: {maxParticipants}
                    </p>
                    <p className={styles.time}>{time}</p>
                </div>
                <div className={styles.actions}>
                    <div className={styles.share}>
                        <Button
                            icon={isShared ? "/success.svg" : "/share.svg"}
                            className={styles.icon}
                            onClick={handleShareClick}
                        />
                    </div>
                    <Button
                        className={styles.icon}
                        value={isJoined ? "Joined" : "Join"}
                        type={isJoined ? "success" : "primary"}
                        size="small"
                        onClick={handleJoinClick}
                    />
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={title}
                    width={398}
                    height={183}
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.line}></div>
        </div>
    );
}
