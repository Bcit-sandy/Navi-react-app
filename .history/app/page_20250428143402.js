"use client";

import Image from "next/image";
import { AnonymousToggle } from "./_ui/buttons";
import { useState } from "react";

export function Home() {
    const [toggled, setToggled] = useState(false);
    return <AnonymousToggle />;
}
