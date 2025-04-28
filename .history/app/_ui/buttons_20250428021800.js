import "./module.button.css";
import "../globals.css";
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


//** ONBOARDING **//
// radio button (description) - 2 variant (light-un, dark) - angie

// button (Let's go explore - skip) - daniel

// button (tags) - sandy
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


// ** HOMEPAGE **//
// Navbar (search button and profile button) - angie

// Plus button - daniel 
// 2 buttons, same style, different colors

//** COMMUNITY POST **//
// heart (4 variants) 2 sizes - sandy
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

// comment button  2 sizes - angie

// 3 dots button - daniel

// short join button (event homepage) - 2 variants - sandy
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

//** POSTING COMMUNITY POST **//
// toggle button 2var - angie

// image adding button - daniel

// post button - sandy
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

//** EVENT INFO **//
// users joining circle (image holder) - angie

// long join button - 2 variants - daniel


//** EVENT POST **//
// send button - sandy
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

//** PROFILE **//
// Small Button 
// Edit - angie

// Settings - daniel

// return button - sandy
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

//** NAVBAR **//
// 2 buttons (community and events) - angie

//** BUTTONS **//
// Calendar View - daniel

// Follow button - sandy
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


// ** CREATE EVENT **//
// Tags - same as onboarding - angie

// Round Next button - daniel

// Search button - sandy

// Back button - angie

// Pop Up leave buttons - Use buttons from Sign up page - daniel

// ** EDIT PROFILE **//
// edit circle button - sandy
// pop-up - 2 buttons, take photo, choose from library - angie

// ** SETTINGS **//
// Blue buttons with graphics inside - daniel
// Toggle Button - sandy
// Radio button - angie

// Sign up button

//** BUTTONS **//

// Small Button 