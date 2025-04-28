"use client";

import Image from "next/image";
import { AnonymousToggle } from "./_ui/buttons";
import "./_ui/module.button.css";
import { useState } from "react";

export default function Home() {
    const [toggled, setToggled] = useState(false);
}
return (
    <main>
        <AnonymousToggle />
    </main>
);
