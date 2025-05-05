"use client";
import styles from "./SignUp_Input.module.css";

export const SignUp_Input = ({ label, type, name, placeholder }) => {
    return (
        <div className={styles.signUp_input}>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                required 
            />
            <label>{label}</label>
        </div>
    );
}; 