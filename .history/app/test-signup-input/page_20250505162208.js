"use client";
import { SignUp_Input } from "@/app/components/SignUp_Input/SignUp_Input";
import styles from "./page.module.css";

export default function SignUpInputTest() {
    return (
        <div className={styles.container}>
            <h1>Sign Up Input Test</h1>
            <div className={styles.section}>
                <SignUp_Input 
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                />
                <SignUp_Input 
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                />
            </div>
        </div>
    );
} 