"use client";

import Image from "next/image";
import {
    Explore,
    Skip,
    Add,
    Community,
    Event,
    Elipses,
    Report,
    ImageAdd,
    EventNotification,
    RoundNext,
    LeaveEvent,
    SettingsButton,
    ParticipantField,
    EditBioText,
    PlaceholderImg_sm, 
    PlaceholderImg_lg,
    PlaceholderImg_event,
    PlaceholderImg_featured,
    PlaceholderImg_profile,
    PlaceholderImg_profile_sm,
    Share,
    PopupSlider,
    SignUp_Input
} from "./_ui/buttons";

export default function Page() {
    return (
        <main>
             <SignUp_Input label="Email" type="email" name="email" placeholder="Enter email"/>
        <SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
        <SignUp_Input
          label="Re-enter Password"
          type="password"
          name="repassword"
          placeholder="Re-enter password"
        />
            <Share />
            <PlaceholderImg_profile_sm />
            <PlaceholderImg_profile />
            <PlaceholderImg_event />
            <PlaceholderImg_featured />
            <PlaceholderImg_lg />
            <PlaceholderImg_sm />
            <EditBioText />
            <ParticipantField />
            <SettingsButton />
            <Explore />
            <Skip />
            <Add />
            <Community />
            <Event />
            <Elipses />
            <Report />
            <ImageAdd />
            <EventNotification />
            <RoundNext />
            <LeaveEvent />
        </main>
        
    );
}

import Image from "next/image";
import {
    AnonymousToggle,
    Search,
    Profile,
    Comment,
    Edit,
    Delete,
    Toggle,
    HomePageNav,
    TakePhotoButton,
    ChoosePhotoButton,
    UserCircles,
    StudentCategories,
    SingleComment,
    CommentWithReply,
    LocationDropdown,
    StudentTypeDropdown,
} from "./_ui/buttons";
import { EventsPostTextField, CommunityPostTextField } from "./_ui/textfield";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    const [onOffToggled, setonOffToggled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
    const [post, setPost] = useState("");
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log("Selected category:", category);
    };
    return (
        <main>
            <AnonymousToggle />
            <Search />
            <Profile />
            <Comment />
            <Edit />
            <Delete />
            <Toggle />
            <HomePageNav />
            <TakePhotoButton />
            <ChoosePhotoButton />
            <UserCircles users={users} />
            <StudentCategories onSelect={handleCategorySelect} />
            <CommunityPostTextField
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <EventsPostTextField />
            <SingleComment
                author='Jenny Pham'
                date='Mar 31, 2025'
                content="I would say Granville Island. I'd have a lot of fun!!"
            />
            <CommentWithReply />
            <LocationDropdown />
            <StudentTypeDropdown />
        </main>
    );
}
