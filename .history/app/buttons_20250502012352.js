'use client'

import { useState } from "react";

export const useButtons = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [smallHeartLiked, setSmallHeartLiked] = useState(false);
    const [largeHeartLiked, setLargeHeartLiked] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [textSize, setTextSize] = useState("medium");
    const [userQuery, setUserQuery] = useState("");

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

    const handleUserChange = (e) => {
        setUserQuery(e.target.value);
        console.log("Searching:", e.target.value);
    };

    return {
        selectedTags,
        smallHeartLiked,
        largeHeartLiked,
        isJoined,
        isFollowing,
        searchQuery,
        textSize,
        userQuery,
        handleTagClick,
        handleSignUp,
        handleSignIn,
        handleSmallHeartClick,
        handleLargeHeartClick,
        handleJoinClick,
        handlePostClick,
        handleSendClick,
        handleReturnClick,
        handleFollowClick,
        handleSearchChange,
        handleSearchButtonClick,
        handleEditClick,
        handleTextSizeChange,
        handleUserChange
    };
}; 