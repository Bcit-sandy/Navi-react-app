"use client";
import { SignUp } from "@/app/components/SignUp/SignUp";
import styles from "./page.module.css";

export default function SignUpTest() {
    return (
        <div className={styles.container}>
            <h1>Sign Up Button Test</h1>
            <div className={styles.section}>
                <SignUp />
                <SignUp label="Create Account" />
            </div>
        </div>
    );
} 