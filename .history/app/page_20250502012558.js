'use client'

import Image from "next/image";
import { Tags, SignUp, SignIn, Heart, Join, Post, Send, Return, Follow, SearchBar, SearchButton, EditButton, TextSizeRadio } from "./_ui/buttons";
import { useButtonHandlers } from "./_ui/buttonHandlers";

export default function Buttons() {
    const {
        selectedTags,
        smallHeartLiked,
        largeHeartLiked,
        isJoined,
        isFollowing,
        searchQuery,
        textSize,
        tags,
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
        handleTextSizeChange
    } = useButtonHandlers();

    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>

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

export default function Textfield() {
    const { userQuery, handleUserChange } = useButtonHandlers();
    
    return (
        <div className="search-container">
            <Username onChange={handleUserChange} />
        </div>
    );
}