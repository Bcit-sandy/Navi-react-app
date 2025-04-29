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
} from "./_ui/buttons";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    const [onOffToggled, setonOffToggled] = useState(false);
    const users = [
        { id: 1, name: "User 1", imageUrl: "/user1.jpg" },
        { id: 2, name: "User 2", imageUrl: "/user2.jpg" },
        { id: 3, name: "User 3", imageUrl: "/user3.jpg" },
        { id: 4, name: "User 4", imageUrl: "/user4.jpg" },
        { id: 5, name: "User 5", imageUrl: "/user5.jpg" },
    ];
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
            <UserCircles />
        </main>
    );
}
