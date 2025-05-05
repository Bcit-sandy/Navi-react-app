"use client";
import { SignUp_Input } from "../components/SignUp_Input/SignUp_Input";

export default function TestSignUpInputPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Sign Up Input Test Page</h1>
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
    );
} 