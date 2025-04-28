'use client'

import Image from "next/image";
import { Tags, SignUp, SignIn, Heart, Join, Post, Send, Return, Follow, SearchBar, SearchButton, EditButton, TextSizeRadio } from "./_ui/buttons";
import{Username} from "./_ui/textfield";
import { useState } from "react";

export default function Buttons() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [smallHeartLiked, setSmallHeartLiked] = useState(false);
    const [largeHeartLiked, setLargeHeartLiked] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [textSize, setTextSize] = useState("medium");
    const tags = ["Sports", "Outdoor Activities", "Movies", "Music", "Video Games","Cafe Hopping","Reading","Arts","Food","Dancing","Learning","Board Games"];
    
    const handleTagClick = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    const handleSignUp = () => {
        console.log("Sign up!");
        // Add sign up function later
    };

    const handleSignIn = () => {
        console.log("Sign In ...Loading...");
        // Add sign up function later
    };

    const handleSmallHeartClick = () => {
        setSmallHeartLiked(!smallHeartLiked);
    };

    const handleLargeHeartClick = () => {
        setLargeHeartLiked(!largeHeartLiked);
    };

    const handleJoinClick = () => {
        setIsJoined(!isJoined);
    };

    const handlePostClick = () => {
        console.log("Posting...");
        // Add post function later
    };

    const handleSendClick = () => {
        console.log("Sending...");
        // Add send function later
    };

    const handleReturnClick = () => {
        console.log("Returning...");
        // Add return function later
    };

    const handleFollowClick = () => {
        setIsFollowing(!isFollowing);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        console.log("Searching:", e.target.value);
    };

    const handleSearchButtonClick = () => {
        console.log("Search button clicked:", searchQuery);
    };

    const handleEditClick = () => {
        console.log("Editing...");
        // Add edit function later
    };

    const handleTextSizeChange = (e) => {
        setTextSize(e.target.value);
        console.log("Text size changed to:", e.target.value);
    };

    const handleUsernameChange = (e) => {
        console.log("Username:", e.target.value);
    };

    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>

        <div className="username-container">
            <Username 
                label="Username"
                placeholder="Enter your username here"
                onChange={handleUsernameChange}
                required={true}
            />
        </div>

        <div className="search-container">
            <SearchBar onChange={handleSearchChange} />
        </div>

        <div className="search-button-container">
            <SearchButton onClick={handleSearchButtonClick} />
        </div>

        <div className="edit-container">
            <EditButton onClick={handleEditClick} />
        </div>

        <TextSizeRadio value={textSize} onChange={handleTextSizeChange} />

        <div className="signup-container">
            <SignUp onClick={handleSignUp} />
        </div>

        <div className="signin-container">
            <SignIn onClick={handleSignIn} />
        </div>

        <div className="tags-container">
            {tags.map((tag) => (
                <Tags 
                    key={tag}
                    label={tag}
                    isSelected={selectedTags.includes(tag)}
                    onClick={() => handleTagClick(tag)}
                />
            ))}
        </div>

        <div className="heart-buttons-container">
            <Heart size="small" isLiked={smallHeartLiked} onClick={handleSmallHeartClick} />
            <Heart size="large" isLiked={largeHeartLiked} onClick={handleLargeHeartClick} />
        </div>

        <div className="join-container">
            <Join isJoined={isJoined} onClick={handleJoinClick} />
        </div>

        <div className="post-container">
            <Post onClick={handlePostClick} />
        </div>

        <div className="send-container">
            <Send onClick={handleSendClick} />
        </div>

        <div className="return-container">
            <Return onClick={handleReturnClick} />
        </div>

        <div className="follow-container">
            <Follow isFollowing={isFollowing} onClick={handleFollowClick} />
        </div>
      </main>
    );
}


export function Textfield () {
    const [username, setUsername] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        console.log("Username:", e.target.value);
    };

    return (
        <div className="textfield-container">
            <Username />
        </div>
    );
}