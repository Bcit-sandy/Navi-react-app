"use client";
import { useState } from "react";
import { Tags } from "@/app/components/Tags/Tags";
import styles from "./page.module.css";

export default function TagsTest() {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagClick = (tag) => {
        setSelectedTags(prev => 
            prev.includes(tag) 
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        );
    };

    const tags = ["React", "JavaScript", "CSS", "HTML", "Next.js"];

    return (
        <div className={styles.container}>
            <h1>Tags Test</h1>
            <div className={styles.section}>
                {tags.map(tag => (
                    <Tags
                        key={tag}
                        label={tag}
                        isSelected={selectedTags.includes(tag)}
                        onClick={() => handleTagClick(tag)}
                    />
                ))}
            </div>
        </div>
    );
} 