"use client";

import Image from "next/image";
import {
    AnonymousToggle,
    Search,
    Profile,
    Comment,
    Edit,
    Delete,
    StudentCategory,
} from "./_ui/buttons";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);

    return (
        <main>
            <StudentCategory />
            <AnonymousToggle />
            <Search />
            <Profile />
            <Comment />
            <Edit />
            <Delete />
        </main>
    );
}
