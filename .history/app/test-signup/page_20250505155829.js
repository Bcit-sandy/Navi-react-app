"use client";
import { SignUp } from "../components/SignUp/SignUp";

export default function TestSignUpPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Sign Up Button Test Page</h1>
            <SignUp />
            <SignUp label="Create Account" />
        </div>
    );
} 