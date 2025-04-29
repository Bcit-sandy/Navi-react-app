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
} from "./_ui/buttons";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    const [onOffToggled, setonOffToggled] = useState(false);
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
        </main>
    );
}
