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
    EditBioText,
    PlaceholderImg_sm, 
    PlaceholderImg_lg,
    PlaceholderImg_event,
    PlaceholderImg_featured,
    PlaceholderImg_profile
} from "./_ui/buttons";

export default function Page() {
    return (
        <main style={{ padding: "2rem", fontFamily: "Arial" }}>
            <PlaceholderImg_profile />
            <PlaceholderImg_event />
            <PlaceholderImg_featured />
            <PlaceholderImg_lg />
            <PlaceholderImg_sm />
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
