import "./module.button.css";
import Image from "next/image";

// ** SIGN UP **//
// Sign in/up button - sandy
export function SignUp({ label = "Sign Up", onClick }) {
    return (
        <button 
            className="signup-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function SignIn({ label = "Sign In", onClick }) {
    return (
        <button 
            className="signin-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}       

export function Tags({label, onClick, isSelected = false }) {
    return (
        <button 
            className={`tag ${isSelected ? 'tag--selected' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function Heart({ size = "small", isLiked = false, onClick }) {
    return (
        <button 
            className={`heart-button heart-${size}`}
            onClick={onClick}
        >
            <Image 
                src={isLiked ? "/filledheart.svg" : "/outlineheart.svg"} 
                alt={isLiked ? "filled heart icon" : "outline heart icon"}
                width={size === "small" ? 24 : 32}
                height={size === "small" ? 24 : 32}
            />
        </button>
    );
}

export function Join({ isJoined = false, onClick }) {
    return (
        <button 
            className={`join-button ${isJoined ? 'join-button--joined' : ''}`}
            onClick={onClick}
        >
            {isJoined ? "Joined" : "Join"}
        </button>
    );
}

export function Post({ label = "Post →", onClick }) {
    return (
        <button 
            className="post-button"
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function Send({ onClick }) {
    return (
        <button 
            className="send-button"
            onClick={onClick}
        >
            <Image 
                src="/send.svg" 
                alt="send icon"
                width={25}
                height={24}
            />
        </button>
    );
}

export function Return({ onClick }) {
    return (
        <button 
            className="return-button"
            onClick={onClick}
        >
            <Image 
                src="/return.svg" 
                alt="return icon"
                width={25}
                height={25}
            />
        </button>
    );
}

export function Follow({ isFollowing = false, onClick }) {
    return (
        <button 
            className={`follow-button ${isFollowing ? 'followed' : ''}`}
            onClick={onClick}
        >
            <Image 
                src={isFollowing ? "/followed.svg" : "/follow.svg"} 
                alt={isFollowing ? "unfollow icon" : "follow icon"}
                width={25}
                height={25}
            />
            <span className="follow-text">{isFollowing ? "Followed" : "Follow"}</span>
        </button>
    );
}

export function SearchBar({ placeholder = "Search here", onChange }) {
    return (
        <div className="search-container">
            <Image 
                src="/search.svg" 
                alt="search icon"
                width={20}
                height={20}
                className="search-icon"
            />
            <input
                type="text"
                className="search-input"
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    );
}

export function SearchButton({ onClick }) {
    return (
        <button 
            className="search-button"
            onClick={onClick}
        >
            <Image 
                src="/search.svg" 
                alt="search icon"
                width={20}
                height={20}
                className="search-button-icon"
            />
            <span>Search</span>
        </button>
    );
}

export function EditButton({ onClick }) {
    return (
        <button 
            className="edit-button"
            onClick={onClick}
        >
            <Image 
                src="/edit.svg" 
                alt="edit icon"
                width={20}
                height={20}
            />
        </button>
    );
}
// pop-up - 2 buttons, take photo, choose from library - angie

// ** SETTINGS **//
// Blue buttons with graphics inside - daniel
// Toggle Button - angie
// Radio button - sandy
export function TextSizeRadio({ value = "medium", onChange }) {
    return (
        <div className="text-size-radio-container">
            <label className="radio-label">
                <input
                    type="radio"
                    name="textSize"
                    value="medium"
                    checked={value === "medium"}
                    onChange={onChange}
                    className="radio-input"
                />
                <span className="radio-text">Medium (default) </span>
            </label>
            <label className="radio-label">
                <input
                    type="radio"
                    name="textSize"
                    value="large"
                    checked={value === "large"}
                    onChange={onChange}
                    className="radio-input"
                />
                <span className="radio-text">Large</span>
            </label>
        </div>
    );
}

// Profile tag with image and text - Sandy
export function ProfileTag({ onClick, title, subtitle, imageSrc }) {
    return (
        <button className="profile-tag" onClick={onClick}>
            <div className="profile-image-container">
                <Image 
                    src={imageSrc}
                    alt="profile image"
                    width={48}
                    height={48}
                    className="profile-image"
                />
            </div>
            <div className="profile-tag-content">
                <p className="profile-tag-title">{title}</p>
                <p className="profile-tag-subtitle">{subtitle}</p>
            </div>
        </button>
    );
}

export function EventDateTag({ onClick, month, date}) {
    return (
        <button className="event-date-tag" onClick={onClick}>
            <div className="event-date-container">
            <div className="event-tag-content">
                <p className="event-tag-month">{month}</p>
                <br></br>
                <p className="event-tag-date">{date}</p>
            </div>
            </div>
        </button>
    );
}


export function CalendarViewButton({ onClick, text }) {
    return (
        <button 
            className="calendar-view-button"
            onClick={onClick}
        >
            <span className="calendar-view"> {text}</span>
        </button>
    );
}

// Success status bar - Sandy
export function SuccessStatusBar({ message }) {
    return (
        <div className="success-status-bar">
            <Image 
                src="/success.svg"
                alt="success icon"
                width={20}
                height={20}
                className="success-icon"
            />
            <span className="success-message">{message}</span>
        </div>
    );
}


