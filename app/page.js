"use client";
import "./globals.css";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { EventPost } from "./BigComponents/EventPost/EventPost";
import { ProfileTopNav } from "./BigComponents/ProfileTopNav/ProfileTopNav";
import { OnboardProgressBar }from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar"
import { EventJoining } from "./BigComponents/EventJoining/EventJoining";
import Button from "@/app/button/button";
import * as Buttons from "@/app/Buttons/allbuttons";

import {
    Username,
    Comment,
    EventsPostTextField,
    CommunityPostTextField,
} from "./components/textfield";


    const [selectedTags, setSelectedTags] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [textSize, setTextSize] = useState("medium");
    const [userQuery, setUserQuery] = useState("");
    const [post, setPost] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [progressStep, setProgressStep] = useState(2);

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

            <ProfileTopNav />

            <OnboardProgressBar
                currentStep={progressStep}
                totalSteps={6}
                onPrev={() => setProgressStep((prev) => Math.max(1, prev - 1))}
                onNext={() => setProgressStep((prev) => Math.min(6, prev + 1))}
            />

            <EventPost
                date='15'
                month='MAY'
                title='Badminton (beginner)'
                tags='Sports, Badminton'
                location='Richmond, BC'
                maxParticipants={22}
                time='10:00 AM - 2:00 PM'
                image='/images/soccer.jpg'
                onJoin={() => alert("Joined Badminton Activities!")}
            />

            <EventJoining
                title='Badminton for beginner'
                time='12:00PM - 6:00PM'
                users={[
                    { id: 1, name: "User1", avatar: "/user1.jpg" },
                    { id: 2, name: "User2", avatar: "/user2.jpg" },
                    { id: 3, name: "User3", avatar: "/user3.jpg" },
                    { id: 4, name: "User4", avatar: "/user4.jpg" },
                    // ...more users
                ]}
                onJoin={() => alert("Joined!")}
                onShare={() => alert("Shared!")}
            />
            <Buttons.SuccessStatusBar message='Successfully created event!' />
            <Buttons.SearchBar
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    console.log("Searching:", e.target.value);
                }}
            />
            <Buttons.TextSizeRadio
                value={textSize}
                onChange={(e) => {
                    setTextSize(e.target.value);
                    console.log("Text size changed to:", e.target.value);
                }}
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

            <Buttons.LocationDropdown />
            <Buttons.StudentTypeDropdown />

            {/* Placeholder images */}
            <Buttons.PlaceholderImg_profile_sm />
            <Buttons.PlaceholderImg_profile />
            <Buttons.PlaceholderImg_event />
            <Buttons.PlaceholderImg_featured />
            <Buttons.PlaceholderImg_lg />
            <Buttons.PlaceholderImg_sm />

            <Buttons.EditBioText />
            <Buttons.ParticipantField />
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
