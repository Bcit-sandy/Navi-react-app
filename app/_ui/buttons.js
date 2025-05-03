"use client";
import "./module.button.css";
import "../globals.css";
import { useEffect, useState, useRef } from "react";
import Form from 'next/form'

// Sign up
// Onboarding

// Let's go Explore | big button
export function Explore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={`explore ${isActive ? "explore-active" : ""}`}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}>
            Let's go explore!
            <img
                className='explore_arrow'
                src='/arrow_right.svg'
                alt='right arrow'
            />
        </button>
    );
}

// small skip
export function Skip() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Skip button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`skip ${isActive ? "skip-active" : ""}`}
            onClick={handleClick}>
            Skip
        </button>
    );
}

// HomePage

// Add post
export function Add() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Add button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`add ${isActive ? "add-active" : ""}`}
            onClick={handleClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}

export function Community() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("communty button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`community ${isActive ? "community-active" : ""}`}
            onClick={handleClick}>
            <img
                className='community_icon'
                src='/community.svg'
                alt='community icon'></img>
            Create Community Post
        </button>
    );
}

export function Event() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`event ${isActive ? "event-active" : ""}`}
            onClick={handleClick}>
            <img
                className='event_icon'
                src='/event.svg'
                alt='event icon'></img>
            Create Event Post
        </button>
    );
}

// Elipses and Report
export function Elipses() {
    return (
        <button className='elipses'>
            <img
                className='elipses_icon'
                src='/elipses.svg'
                alt='three dots'></img>
        </button>
    );
}

export function Report() {
    return (
        <div className='report'>
            <div className='report_heading'>
                <p className='report_headingText'>Report</p>
                <img
                    className='report_icon'
                    src='report.svg'
                    alt='report icon'></img>
            </div>
            <div className='report_options'>
                <button className='report_button'>Not interested</button>
                <button className='report_button'>Spam</button>
                <button className='report_button'>Inappropriate content</button>
                <button className='report_button'>False information</button>
                <button className='report_buttonLast'>
                    Hate speech, discrimination
                </button>
            </div>
        </div>
    );
}

//Image add
export function ImageAdd() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("clicked, current state:", isActive);
        setIsActive(!isActive);
    };


    return (
        <button className={`imageAdd ${isActive ? "imageAdd-active" : ""}`}
        onClick={handleClick}>
            <img
                className='imageAdd_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}

//Event notification
export function EventNotification() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const animationRef = useRef(null);

    useEffect(() => {
        startAnimation();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    const startAnimation = () => {
        setProgress(0);
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const current = Math.min(100, (elapsed / duration) * 100);

            setProgress(current);

            if (current < 100) {
                animationRef.current = requestAnimationFrame(animate);
            } else {
                setTimeout(() => {
                    setIsVisible(false);
                }, 500);
            }
        };

        animationRef.current = requestAnimationFrame(animate);
    };

    if (!isVisible) return null;

    return (
        <div className="notification-container">
            <div className="eventNotification">
                <h3 className="eventNotification_text">You have joined an event</h3>
                <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
        </div>
    );
}
// Profile

// Create Event
export function RoundNext() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("event button clicked, current state:", isActive);
        setIsActive(!isActive);
    };
    return (
        <button
            className={`roundNext ${isActive ? "roundNext-active" : ""}`}
            onClick={handleClick}>
            <img
                className='roundNext_icon'
                src='/arrow_right.svg'
                alt='next icon'></img>
        </button>
    );
}

export function LeaveEvent() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(button) {
        setActiveButton(button);
    }

    return (
        <div className='leaveEvent'>
            <p className='leaveEvent_text'>Do you want to leave this event?</p>
            <div className='leaveEvent_options'>
                <button
                    className={`leaveEvent_yes ${
                        activeButton === "yes"
                            ? "leaveEvent_yes-active"
                            : "leaveEvent_yes-inactive"
                    }`}
                    onClick={() => handleClick("yes")}>
                    Yes, I would like to leave
                </button>
                <button
                    className={`leaveEvent_no ${
                        activeButton === "no"
                            ? "leaveEvent_no-active"
                            : "leaveEvent_no-inactive"
                    }`}
                    onClick={() => handleClick("no")}>
                    No, I would like to stay
                </button>
            </div>
        </div>
    );
}
// Setting

export function SettingsButton() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(buttonName) {
        if (activeButton === buttonName) {
            setActiveButton(null); // if clicking again, deactivate
        } else {
            setActiveButton(buttonName); // otherwise, activate
        }
    }

    return (
        <div className='settings'>
            <button
                className={`darkMode ${
                    activeButton === "darkMode" ? "darkMode-active" : ""
                }`}
                onClick={() => handleClick("darkMode")}>
                <img
                    className='darkMode_icon'
                    src='/dark.svg'
                    alt='dark mode'
                />
                Dark Mode
            </button>

            <button
                className={`fontSize ${
                    activeButton === "fontSize" ? "fontSize-active" : ""
                }`}
                onClick={() => handleClick("fontSize")}>
                <img
                    className='fontSize_icon'
                    src='/font.svg'
                    alt='font icon'
                />
                Font Size
            </button>

            <button
                className={`contactUs ${
                    activeButton === "contactUs" ? "contactUs-active" : ""
                }`}
                onClick={() => handleClick("contactUs")}>
                <img
                    className='contactUs_icon'
                    src='/contact.svg'
                    alt='contact icon'
                />
                Contact Us
            </button>

            <button
                className={`terms ${
                    activeButton === "terms" ? "terms-active" : ""
                }`}
                onClick={() => handleClick("terms")}>
                <img
                    className='terms_icon'
                    src='/terms.svg'
                    alt='terms'
                />
                Terms & Agreement
            </button>

            <button
                className={`logOut ${
                    activeButton === "logOut" ? "logOut-active" : ""
                }`}
                onClick={() => handleClick("logOut")}>
                <img
                    className='logOut_icon'
                    src='/logout.svg'
                    alt='leave'
                />
                Log Out
            </button>
        </div>
    );
}

// text field
export function ParticipantField() {
    return (
        <input
            type="number"
            placeholder="Enter number here"
            className="participantField"
            min="0"
            inputMode="numeric"
            pattern="[0-9]*"
        />
    );
}

export function EditBioText() {
    return (
        <textarea
        type="text"
        placeholder="Describe yourself here..."
        className="editBio"></textarea>
    );
}

export function PlaceholderImg_sm(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_sm"
        />
      </div>
    );
  }

  export function PlaceholderImg_lg(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_lg"
        />
      </div>
    );
  }

  export function PlaceholderImg_event(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_event"
        />
      </div>
    );
  }

  export function PlaceholderImg_featured(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_featured"
        />
      </div>
    );
  }

  export function PlaceholderImg_profile(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_profile"
        />
      </div>
    );
  }

  export function PlaceholderImg_profile_sm(){
    return (
      <div className="image-placeholder">
        <img
          src="/placeholder.webp"
          alt="Placeholder image"
          className="placeholderImg_profile_sm"
        />
      </div>
    );
  }

  export function Share() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Share button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={`share ${isActive ? "share-active" : ""}`}
            onClick={handleClick}>
            <img
                className='share_icon'
                src='/share.svg'
                alt='share icon'></img>
        </button>
    );
}

export function PopupSlider(){
    return (
            <img
                className='popupSlider'
                src='/popup_slider.svg'
                alt='popup slider'></img>
    );
}

export const SignUp_Input = ({ label, type, name, placeholder }) => {
    return (
      <div className="signUp_input">
        <input type={type} name={name} placeholder={placeholder} required />
        <label>{label}</label>
      </div>
    );
  };

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;
import Image from "next/image";

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

// drop down location button
export function LocationDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");

    const handleOptionClick = (location) => {
        setSelectedLocation(location);
        setSearchValue(location);
        setIsOpen(false);
    };

    const locations = [
        "Vancouver, BC",
        "Burnaby, BC",
        "Coquitlam, BC",
        "Surrey, BC",
        "Richmond, BC",
    ];

    return (
        <div className={`location-dropdown ${isOpen ? "open" : ""}`}>
            <div className='dropdown-trigger'>
                <div className='search-icon'>
                    <Image
                        src='/search.svg'
                        alt='search'
                        width={20}
                        height={20}
                    />
                </div>
                <input
                    type='text'
                    className='search-input'
                    placeholder='Search here'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                />
                <button
                    className={`dropdown-button ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Image
                        src={isOpen ? "/dropdown.svg" : "/dropdown-right.svg"}
                        alt='expand'
                        width={18}
                        height={18}
                    />
                </button>
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    {locations
                        .filter((location) =>
                            location
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((location, index) => (
                            <div
                                key={index}
                                className={`location-option ${
                                    selectedLocation === location
                                        ? "selected"
                                        : ""
                                }`}
                                onClick={() => handleOptionClick(location)}
                            >
                                {location}
                            </div>
                        ))}
                </div>
            )}
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
                    width={32}
                    height={32}
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
                <div className='reply-line-horizontal'></div>
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

// Student type dropdown component
export function StudentTypeDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState("post-grad");

    const options = [
        {
            id: "post-grad",
            label: "Post-Grad",
            icon: "/education.svg",
        },
        {
            id: "high-school",
            label: "High School",
            icon: "/education.svg",
        },
        {
            id: "taking-break",
            label: "Taking a break",
            icon: "/away.svg",
        },
        {
            id: "others",
            label: "Others",
            icon: "/others.svg",
        },
    ];

    const selectedOption =
        options.find((opt) => opt.id === selected) || options[0];

    return (
        <div className='student-type-dropdown'>
            <button
                className={`dropdown-trigger ${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='selected-option'>
                    <Image
                        src={selectedOption.icon}
                        alt={selectedOption.label}
                        width={20}
                        height={20}
                    />
                    <span>{selectedOption.label}</span>
                </div>
                <Image
                    src={
                        isOpen
                            ? "/arrow-drop-down.svg"
                            : "/arrow-drop-down-right.svg"
                    }
                    alt='expand'
                    width={18}
                    height={18}
                />
            </button>
            {isOpen && (
                <div className='dropdown-options'>
                    {options.map((option) => (
                        <button
                            key={option.id}
                            className={`dropdown-option ${
                                selected === option.id ? "selected" : ""
                            }`}
                            onClick={() => {
                                setSelected(option.id);
                                setIsOpen(false);
                            }}
                        >
                            <div className='option-content'>
                                <Image
                                    src={option.icon}
                                    alt={option.label}
                                    width={20}
                                    height={20}
                                />
                                <span>{option.label}</span>
                            </div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
