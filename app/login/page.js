"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import * as Buttons from "@/app/Buttons/allbuttons";
import NavBar from "@/app/BigComponents/NavBar/navbar";
import CommunityPost from "@/app/BigComponents/CommunityPost/communitypost";

export default function Login() {
    return (
        <main className='login-container'>
            <CommunityPost
                imgSm="/alex.svg"
                name='Alex Smith'
                date='Apr 7, 2025'
                content='Hello guys, I just got to Vancouver. What are some of the best places to visit first in Van?'
                imgLg='/post1.svg'
            />
            <br></br>
            <h1>hihihih</h1>
            <NavBar />
            <br></br>
            <img
                src='/signinlogo.svg'
                alt='logo art'></img>
            <div className='login-fields'>
                <Buttons.SignUp_Input
                    label='Email'
                    type='email'
                    name='email'
                    placeholder='Enter email'
                />
                <Buttons.SignUp_Input
                    label='Password'
                    type='password'
                    name='password'
                    placeholder='Enter password'
                />
                <Buttons.SignUp_Input
                    label='Re-enter Password'
                    type='password'
                    name='repassword'
                    placeholder='Re-enter password'
                />
            </div>
            <Buttons.SignIn
                onClick={() => console.log("Sign In ...Loading...")}
            />
            <h5 className='noAccount'>Don’t have an account?</h5>
            <Buttons.SignUp onClick={() => console.log("Sign up!")} />
        </main>
    );
}
