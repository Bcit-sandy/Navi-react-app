"use client";
import Image from "next/image";
import styles from "./Send.module.css";

export function Send({ onClick }) {
    return (
        <button 
            className={styles.sendButton}
            onClick={onClick}
        >
            <Image 
                src="/send.svg" 
                alt="send icon"
                width={25}
                height={24}
            />
        </button>
    );
} 