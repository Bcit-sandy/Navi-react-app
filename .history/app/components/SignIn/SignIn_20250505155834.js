"use client";
import styles from "./SignIn.module.css";

export function SignIn({ label = "Sign In", onClick }) {
    return (
        <button 
            className={styles.signinButton}
            onClick={onClick}
        >
            {label}
        </button>
    );
} 