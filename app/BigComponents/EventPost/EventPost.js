"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { EventDateTag } from "@/app/UiElements/EventDateTag";
import { Elipses } from "@/app/UiElements/Elipses";
import { PlaceholderImg_event } from "@/app/UiElements/PlaceholderImg_event";
import styles from "./EventPost.module.css";
import Button from "@/app/button/button";

export default function EventPost({
    date = "",
    month = "",
    title = "",
    tags = "",
    location = "",
    maxParticipants = Number,
    time = "",
    image = null,
    onJoin,
}) {
    return (
        <div className={styles.card}>
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
                    <div className={styles.shareAndElipses}>
                        <Button
                            icon="share.svg"
                            className={styles.icon}
                        />
                        <Button
                            icon="elipses.svg"
                            className={styles.icon}
                        />
                    </div>
                    <Button
                        className={styles.icon}
                        value="Join"
                        type="primary"
                        size="small"
                    />
                </div>
            </div>
            <div className={styles.imageWrapper}>
                <PlaceholderImg_event />
            </div>
            <div className={styles.line}></div>
        </div>
    );
}
