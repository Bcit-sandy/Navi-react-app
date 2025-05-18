"use client";
import { useEffect, useRef, useState } from "react";
import "../globals.css";
import * as Buttons from "@/app/UiElements/uielements";
import NavBar from "@/app/BigComponents/NavBar/navbar";
import CommunityPost from "@/app/BigComponents/CommunityPost/communitypost";
import Button from "@/app/button/button";

export default function Login() {
    return (
        <main className='login-container'>
            <CommunityPost
                imgSm='/alex.svg'
                name='Alex Smith'
                date='Apr 7, 2025'
                content='Hello guys, I just got to Vancouver. What are some of the best places to visit first in Van?'
                imgLg='/post1.svg'
                commentPic='https://randomuser.me/api/portraits/thumb/women/45.jpg'
                commenter='Navjot Bains'
                commentDate='May 14, 2025'
                comment="I'd say Granville Island, I love that place so much!"
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
            <Button
                size="large"
                type="primary"
                value="Sign in"
            />
            
            {/* Sign up button */}
            <h5 className='noAccount'>Don’t have an account?</h5>
            <Button
               size="large"
               type="outline"
               value="Sign up"
            />
        </main>
    );
}
