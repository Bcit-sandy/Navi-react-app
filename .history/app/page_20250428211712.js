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
    StudentCategory,
} from "./_ui/buttons";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    const [onOffToggled, setonOffToggled] = useState(false);
    const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
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
            <StudentCategory />
        </main>
    );
}
