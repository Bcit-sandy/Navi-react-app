"use client";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import * as Buttons from "./Buttons/allbuttons";

import {
    Username,
    Comment,
    EventsPostTextField,
    CommunityPostTextField,
} from "./components/textfield";

export default function Page() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [smallHeartLiked, setSmallHeartLiked] = useState(false);
    const [largeHeartLiked, setLargeHeartLiked] = useState(false);
    const [isJoined, setIsJoined] = useState(false);
    const [isFollowing, setIsFollowing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [textSize, setTextSize] = useState("medium");
    const [userQuery, setUserQuery] = useState("");
    const [post, setPost] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const tags = [
        "Sports",
        "Outdoor Activities",
        "Movies",
        "Music",
        "Video Games",
        "Cafe Hopping",
        "Reading",
        "Arts",
        "Food",
        "Dancing",
        "Learning",
        "Board Games",
    ];

    const handleTagClick = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handleUserChange = (e) => {
        setUserQuery(e.target.value);
        console.log("USERNAME:", e.target.value);
    };

    return (
        <main
            style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            }}
        >
            <h1>ALL COMPONENTS DEMO</h1>

            <Buttons.SuccessStatusBar message='Successfully created event!' />
            <Buttons.SearchBar
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log("Searching:", e.target.value);
                }}
            />
            <Buttons.SearchButton
                onClick={() =>
                    console.log("Search button clicked:", searchQuery)
                }
            />
            <Buttons.EditButton onClick={() => console.log("Editing...")} />
            <Buttons.TextSizeRadio
                value={textSize}
                onChange={(e) => {
                    setTextSize(e.target.value);
                    console.log("Text size changed to:", e.target.value);
                }}
            />
            <Buttons.SignUp onClick={() => console.log("Sign up!")} />
            <Buttons.SignIn
                onClick={() => console.log("Sign In ...Loading...")}
            />

            <div className='tags-container'>
                {tags.map((tag) => (
                    <Buttons.Tags
                        key={tag}
                        label={tag}
                        isSelected={selectedTags.includes(tag)}
                        onClick={() => handleTagClick(tag)}
                    />
                ))}
            </div>

            <div className='heart-buttons-container'>
                <Buttons.Heart
                    size='small'
                    isLiked={smallHeartLiked}
                    onClick={() => setSmallHeartLiked(!smallHeartLiked)}
                />
                <Buttons.Heart
                    size='large'
                    isLiked={largeHeartLiked}
                    onClick={() => setLargeHeartLiked(!largeHeartLiked)}
                />
            </div>

            <Buttons.Join
                isJoined={isJoined}
                onClick={() => setIsJoined(!isJoined)}
            />
            <Buttons.Post onClick={() => console.log("Posting...")} />
            <Buttons.Send onClick={() => console.log("Sending...")} />
            <Buttons.Return onClick={() => console.log("Returning...")} />
            <Buttons.Follow
                isFollowing={isFollowing}
                onClick={() => setIsFollowing(!isFollowing)}
            />

            <Buttons.ProfileTag
                onClick={() => console.log("Profile tag clicked")}
                title='Username'
                subtitle='Date'
                imageSrc='/image.svg'
            />

            <Username onChange={handleUserChange} />
            <Buttons.EventDateTag
                onClick={() => console.log("Event Date:")}
                month='APR'
                date='08'
            />
            <Buttons.CalendarViewButton
                onClick={() => console.log("Calendar clicked")}
                text='Calendar View →'
            />

            {/* SignUp Inputs */}
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

            {/* Extras */}
            <Buttons.AnonymousToggle />
            <Buttons.Search />
            <Buttons.Profile />
            <Buttons.Comment />
            <Buttons.Edit />
            <Buttons.Delete />
            <Buttons.Toggle />
            <Buttons.HomePageNav />
            <Buttons.TakePhotoButton />
            <Buttons.ChoosePhotoButton />
            <Buttons.UserCircles users={users} />
            <Buttons.StudentCategories
                onSelect={(category) => {
                    setSelectedCategory(category);
                    console.log("Selected category:", category);
                }}
            />

            <CommunityPostTextField
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <EventsPostTextField />

            <Buttons.SingleComment
                author='Jenny Pham'
                date='Mar 31, 2025'
                content="I would say Granville Island. I'd have a lot of fun!!"
            />
            <Buttons.CommentWithReply />

            <Buttons.LocationDropdown />
            <Buttons.StudentTypeDropdown />
            <Buttons.Share />

            {/* Placeholder images */}
            <Buttons.PlaceholderImg_profile_sm />
            <Buttons.PlaceholderImg_profile />
            <Buttons.PlaceholderImg_event />
            <Buttons.PlaceholderImg_featured />
            <Buttons.PlaceholderImg_lg />
            <Buttons.PlaceholderImg_sm />

            <Buttons.EditBioText />
            <Buttons.ParticipantField />
            <Buttons.SettingsButton />
            <Buttons.Explore />
            <Buttons.Skip />
            <Buttons.Add />
            <Buttons.Community />
            <Buttons.Event />
            <Buttons.Elipses />
            <Buttons.Report />
            <Buttons.ImageAdd />
            <Buttons.EventNotification />
            <Buttons.RoundNext />
            <Buttons.LeaveEvent />
        </main>
    );
}
