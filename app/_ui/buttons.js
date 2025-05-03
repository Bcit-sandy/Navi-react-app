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
