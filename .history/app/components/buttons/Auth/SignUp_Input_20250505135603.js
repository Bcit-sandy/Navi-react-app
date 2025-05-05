"use client";
import "./SignUp_Input.css";

export const SignUp_Input = ({ label, type, name, placeholder }) => {
    return (
      <div className="signUp_input">
        <input type={type} name={name} placeholder={placeholder} required />
        <label>{label}</label>
      </div>
    );
}; 