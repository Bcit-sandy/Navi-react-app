"use client";
import { EditBioText } from "@/app/components/EditBioText/EditBioText";
import styles from "./page.module.css";

export default function EditBioTextTest() {
    return (
        <div className={styles.container}>
            <h1>Edit Bio Text Test</h1>
            <div className={styles.section}>
                <EditBioText />
            </div>
        </div>
    );
} 