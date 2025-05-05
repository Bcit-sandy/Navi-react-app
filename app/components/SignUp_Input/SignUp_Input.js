"use client";
import styles from "./SignUp_Input.module.css";

export const SignUp_Input = ({ label, type, name, placeholder }) => {
    return (
        <div className={styles.inputContainer}>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                required 
                className={styles.input}
            />
            <label className={styles.label}>{label}</label>
        </div>
    );
}; 