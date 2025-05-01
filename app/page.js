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
    SettingsButton,
    ParticipantField,
    EditBioText
} from "./_ui/buttons";

export default function Page() {
    return (
        <main style={{ padding: "2rem", fontFamily: "Arial" }}>
            <EditBioText />
            <ParticipantField />
            <SettingsButton />
            <Explore />
            <Skip />
            <Add />
            <Community />
            <Event />
            <Elipses />
            <Report />
            <ImageAdd />
            <br></br>
            <EventNotification />
            <RoundNext />
            <LeaveEvent />
        </main>
    );
}
