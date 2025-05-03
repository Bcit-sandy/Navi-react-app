"use client";
import { useEffect, useState, useRef } from "react";

import Image from "next/image";
import * as UI from "./_ui/buttons"; 
import {EventsPostTextField,CommunityPostTextField } from "./_ui/textfield"

export default function Page() {
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
        <UI.SignUp_Input label="Email" type="email" name="email" placeholder="Enter email"/>
        <UI.SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
        <UI.SignUp_Input
          label="Re-enter Password"
          type="password"
          name="repassword"
          placeholder="Re-enter password"
        />
        <UI.AnonymousToggle />
            <UI.Search />
            <UI.Profile />
            <UI.Comment />
            <UI.Edit />
            <UI.Delete />
            <UI.Toggle />
            <UI.HomePageNav />
            <UI.TakePhotoButton />
            <UI.ChoosePhotoButton />
            <UI.UserCircles users={users} />
            <UI.StudentCategories onSelect={handleCategorySelect} />
            <CommunityPostTextField
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />
            <EventsPostTextField />
            <UI.SingleComment
                author='Jenny Pham'
                date='Mar 31, 2025'
                content="I would say Granville Island. I'd have a lot of fun!!"
            />
            <UI.CommentWithReply />
            <UI.LocationDropdown />
            <UI.StudentTypeDropdown />
            <UI.Share />
            <UI.PlaceholderImg_profile_sm />
            <UI.PlaceholderImg_profile />
            <UI.PlaceholderImg_event />
            <UI.PlaceholderImg_featured />
            <UI.PlaceholderImg_lg />
            <UI.PlaceholderImg_sm />
            <UI.EditBioText />
            <UI.ParticipantField />
            <UI.SettingsButton />
            <UI.Explore />
            <UI.Skip />
            <UI.Add />
            <UI.Community />
            <UI.Event />
            <UI.Elipses />
            <UI.Report />
            <UI.ImageAdd />
            <UI.EventNotification />
            <UI.RoundNext />
            <UI.LeaveEvent />
        </main>
        
    );
}


