"use client";
import Image from "next/image";
import styles from "./Search.module.css";

export function Search({ placeholder = "Search...", onChange }) {
    return (
        <div className={styles.searchContainer}>
            <Image 
                src="/search.svg" 
                alt="search icon"
                width={20}
                height={20}
                className={styles.searchIcon}
            />
            <input 
                type="text"
                placeholder={placeholder}
                className={styles.searchInput}
                onChange={onChange}
            />
        </div>
    );
} 