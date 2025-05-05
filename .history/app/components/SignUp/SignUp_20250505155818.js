"use client";
import styles from "./SignUp.module.css";

export function SignUp({ label = "Sign Up", onClick }) {
    return (
        <button 
            className={styles.signupButton}
            onClick={onClick}
        >
            {label}
        </button>
    );
} 