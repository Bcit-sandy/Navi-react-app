"use client";
import styles from "./EditBioText.module.css";

export function EditBioText() {
    return (
        <textarea
            type="text"
            placeholder="Describe yourself here..."
            className={styles.editBio}
        />
    );
} 