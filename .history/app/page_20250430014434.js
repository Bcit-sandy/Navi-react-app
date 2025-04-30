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
} from "./_ui/buttons";
import { CommunityPostTextField } from "./_ui/textfield";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    const [onOffToggled, setonOffToggled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
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
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
            />
        </main>
    );
}
