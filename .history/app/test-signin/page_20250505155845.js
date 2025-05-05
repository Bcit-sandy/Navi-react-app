"use client";
import { SignIn } from "../components/SignIn/SignIn";

export default function TestSignInPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Sign In Button Test Page</h1>
            <SignIn />
            <SignIn label="Log In" />
        </div>
    );
} 