"use client";

import Image from "next/image";
import {
    Explore,
    Skip,
    Add,
    Community,
    Event,
    Elipses,
    Report,
    ImageAdd,
    EventNotification,
    RoundNext,
    LeaveEvent,
    SettingsButton
} from "./_ui/buttons";

export default function Page() {
    return (
        <main style={{ padding: "2rem", fontFamily: "Arial" }}>
            <SettingsButton />
            <Explore />
            <Skip />
            <Add />
            <Community />
            <Event />
            <Elipses />
            <Report />
            <ImageAdd />
            <EventNotification />
            <RoundNext />
            <LeaveEvent />
        </main>
    );
}
