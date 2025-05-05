"use client";
import { SignIn } from "@/app/components/SignIn/SignIn";
import styles from "./page.module.css";

export default function SignInTest() {
    return (
        <div className={styles.container}>
            <h1>Sign In Button Test</h1>
            <div className={styles.section}>
                <SignIn />
                <SignIn label="Log In" />
            </div>
        </div>
    );
} 