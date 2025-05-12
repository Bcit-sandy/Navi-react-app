'use client';
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import * as Buttons from "../Buttons/allbuttons";

export default function Login(){
    return (
        <main className="login-container">
            
        <img src="/signinlogo.svg" alt="logo art"></img>
        <div className="login-fields">
            <Buttons.SignUp_Input label="Email" type="email" name="email" placeholder="Enter email" />
            <Buttons.SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
            <Buttons.SignUp_Input label="Re-enter Password" type="password" name="repassword" placeholder="Re-enter password" />
        </div>
            <Buttons.SignIn onClick={() => console.log("Sign In ...Loading...")} />
            <h5 className="noAccount">Don’t have an account?</h5>
            <Buttons.SignUp onClick={() => console.log("Sign up!")} />
        </main>
    )
};

