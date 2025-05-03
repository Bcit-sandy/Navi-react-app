"use client";

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
                profileImage='/path-to-profile-image.jpg' // Optional, defaults to profile.svg
            />
        </main>
    );
}
