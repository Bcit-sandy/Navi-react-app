"use client";
import Image from "next/image";
import styles from "./Avatar.module.css";

export function Avatar({ 
    src,
    alt = "User avatar",
    size = "medium",
    onClick
}) {
    return (
        <div 
            className={`${styles.avatar} ${styles[size]}`}
            onClick={onClick}
        >
            <Image 
                src={src}
                alt={alt}
                fill
                className={styles.avatarImage}
            />
 