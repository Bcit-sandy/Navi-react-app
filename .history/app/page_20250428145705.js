"use client";

import Image from "next/image";
import { AnonymousToggle, Search } from "./_ui/buttons";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
    return (
        <main>
            <AnonymousToggle />
            <Search />
        </main>
    );
}
