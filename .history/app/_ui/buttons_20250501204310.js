"use client";
import { useState } from "react";
import Image from "next/image";
import "./module.button.css";

// ** SIGN UP **//
// Sign in/up button - sandy
// One blue
// One white

//** ONBOARDING **//
// radio button (description) - 2 variant (light-un, dark) - angie
export function StudentCategories({ onSelect }) {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelect = (category) => {
        setSelectedCategory(category);
        if (onSelect) {
            onSelect(category);
        }
    };

    return (
        <div
            className={`student-categories ${
                selectedCategory ? "has-selected" : ""
            }`}
        >
            <button
                className={`category-card ${
                    selectedCategory === "highschool" ? "selected" : ""
                }`}
                onClick={() => handleSelect("highschool")}
            >
                <div className='card-content'>
                    <h3>
                        High School <br></br> Student
                    </h3>
                    <div className='card-image highschool'></div>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "postgrad" ? "selected" : ""
                }`}
                onClick={() => handleSelect("postgrad")}
            >
                <div className='card-content'>
                    <h3>
                        Post-Grad <br></br> Student
                    </h3>
                    <div className='card-image postgrad'></div>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "break" ? "selected" : ""
                }`}
                onClick={() => handleSelect("break")}
            >
                <div className='card-content'>
                    <h3>
                        Student taking <br></br> a break
                    </h3>
                    <div className='card-image break'></div>
                </div>
            </button>

            <button
                className={`category-card ${
                    selectedCategory === "other" ? "selected" : ""
                }`}
                onClick={() => handleSelect("other")}
            >
                <div className='card-content'>
                    <h3>Other</h3>
                    <div className='card-image other'></div>
                </div>
            </button>
        </div>
    );
}

// button (Let's go explore - skip) - daniel

// button (tags) - sandy

// ** HOMEPAGE **//
// Navbar (search button and profile button) - angie
export function Search({ onClick }) {
    return (
        <button
            className='search-button'
            onClick={onClick}
        >
            <Image
                src='search.svg'
                alt='search icon'
                width={32}
                height={32}
            />
        </button>
    );
}

export function Profile({ onClick }) {
    return (
        <button
            className='profile-button'
            onClick={onClick}
        >
            <Image
                src='/profile.svg'
                alt='profile icon'
                width={32}
                height={32}
            />
        </button>
    );
}

// Plus button - daniel
// 2 buttons, same style, different colors

//** COMMUNITY POST **//
// heart (4 variants) 2 sizes - sandy

// comment button  2 sizes - angie
export function Comment({ onClick }) {
    return (
        <button
            className='comment-button'
            onClick={onClick}
        >
            <Image
                src='/comment.svg'
                alt='comment icon'
                width={32}
                height={32}
            />

            <Image
                src='/comment.svg'
                alt='comment icon'
                width={28}
                height={28}
            />
        </button>
    );
}

// single comment component
export function SingleComment({
    author,
    date,
    content,
    profileImage = "/profile.svg",
}) {
    return (
        <div className='single-comment'>
            <Image
                src={profileImage}
                alt='profile icon'
                width={26}
                height={26}
                className='author-image'
            />
            <div className='comment-content'>
                <div className='comment-header'>
                    <div className='author-details'>
                        <span className='author-name'>{author}</span>
                        <span className='comment-date'>{date}</span>
                    </div>
                </div>
                <p className='comment-text'>{content}</p>
            </div>
        </div>
    );
}

// comment with reply component
export function CommentWithReply() {
    return (
        <div className='comment-thread'>
            <div className='single-comment'>
                <Image
                    src='/profile.svg'
                    alt='profile'
                    width={26}
                    height={26}
                    className='author-image'
                />
                <div className='comment-content'>
                    <div className='author-details'>
                        <span className='author-name'>Gwen Stacy</span>
                        <span className='comment-date'>May 1, 2025</span>
                    </div>
                    <p className='comment-text'>Wow very nice haha!</p>
                </div>
            </div>

            <div className='reply-comment'>
                <div className='reply-line'></div>
                <div className='single-comment'>
                    <Image
                        src='/profile.svg'
                        alt='profile'
                        width={26}
                        height={26}
                        className='author-image'
                    />
                    <div className='comment-content'>
                        <div className='author-details'>
                            <span className='author-name'>John Adam </span>
                            <span className='comment-date'>2m</span>
                        </div>
                        <p className='comment-text'>WOWOWOW</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// 3 dots button - daniel

// short join button (event homepage) - 2 variants - sandy

//** POSTING COMMUNITY POST **//
// toggle button 2var - angie

export function AnonymousToggle() {
    const [toggled, setToggled] = useState(false);

    return (
        <div className='anonymousToggle'>
            <button
                className={`toggle-btn ${toggled ? "toggled" : ""}`}
                onClick={() => setToggled(!toggled)}
            >
                <div className='thumb'>
                    {toggled ? (
                        <Image
                            src='/anonymous-off.svg'
                            alt='anonymous on'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    ) : (
                        <Image
                            src='/anonymous.svg'
                            alt='anonymous off'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    )}
                </div>
            </button>
        </div>
    );
}

// image adding button - daniel

// post button - sandy

//** EVENT INFO **//
// users joining circle (image holder) - angie
export function UserCircles({ users = [] }) {
    return (
        <div className='user-circles'>
            {/* More indicator circle */}
            <div className='circle more-circle'>
                <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>

            {/* User circles */}
            {users &&
                users.map((user, index) => (
                    <div
                        key={index}
                        className='circle'
                    ></div>
                ))}
        </div>
    );
}

// long join button - 2 variants - daniel

//** EVENT POST **//
// send button - sandy

// ** PROFILE **//
// Small Button
// Edit - angie
export function Edit({ onClick }) {
    return (
        <button
            className='edit-button'
            onClick={onClick}
        >
            <Image
                src='/edit.svg'
                alt='edit icon'
                width={32}
                height={32}
            />
        </button>
    );
}

//** SEARCH **//
// Cancel button - angie
export function Delete({ onClick }) {
    return (
        <button
            className='delete-button'
            onClick={onClick}
        >
            <Image
                src='/delete.svg'
                alt='delete icon'
                width={27}
                height={27}
            />

            <Image
                src='/delete.svg'
                alt='delete icon'
                width={20}
                height={20}
            />
        </button>
    );
}

// Settings - daniel

// return - sandy

//** NAVBAR **//
// 2 buttons (community and events) - angie
export function HomePageNav() {
    const [activeLink, setActiveLink] = useState("community");

    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <button
                    className={`nav-link ${
                        activeLink === "community" ? "active" : ""
                    }`}
                    onClick={() => setActiveLink("community")}
                >
                    Community
                </button>
                <button
                    className={`nav-link ${
                        activeLink === "events" ? "active" : ""
                    }`}
                    onClick={() => setActiveLink("events")}
                >
                    Events
                </button>
            </div>
        </nav>
    );
}

//** BUTTONS **//
// Calendar View - daniel

// Follow - sandy

// ** CREATE EVENT **//

// Round Next button - daniel

// Search button - sandy

// Pop Up leave buttons - Use buttons from Sign up page - daniel

// ** EDIT PROFILE **//
// edit circle button - sandy
// pop-up - 2 buttons, take photo, choose from library - angie
export function TakePhotoButton({ onClick }) {
    return (
        <button
            className='photo-button'
            onClick={onClick}
        >
            <div className='photo-icon'>
                <Image
                    src='/camera.svg'
                    alt='Camera'
                    width={24}
                    height={24}
                />
            </div>
            <span>Take a photo</span>
        </button>
    );
}

export function ChoosePhotoButton({ onClick }) {
    return (
        <button
            className='photo-button'
            onClick={onClick}
        >
            <div className='photo-icon'>
                <Image
                    src='/picture.svg'
                    alt='Gallery'
                    width={24}
                    height={24}
                />
            </div>
            <span>Choose from library</span>
        </button>
    );
}

// ** SETTINGS **//
// Blue buttons with graphics inside - daniel
// Toggle Button - angie
export function Toggle() {
    const [onOffToggled, setonOffToggled] = useState(false);

    return (
        <div className='on-off-Toggle'>
            <button
                className={`on-off-toggle-btn ${
                    onOffToggled ? "on-offtoggled" : ""
                }`}
                onClick={() => setonOffToggled(!onOffToggled)}
            >
                <span className='toggle-label'>
                    {onOffToggled ? "ON" : "OFF"}
                </span>
                <div className='on-off-thumb'></div>
            </button>
        </div>
    );
}

// Tog button - sandy
