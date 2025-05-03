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
    PlaceholderImg_profile,
    
    Share,
    PopupSlider,
    SignUp_Input
} from "./_ui/buttons";

export default function Page() {
    return (
        <main>
             <SignUp_Input label="Email" type="email" name="email" placeholder="Enter email"/>
        <SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
        <SignUp_Input
          label="Re-enter Password"
          type="password"
          name="repassword"
          placeholder="Re-enter password"
        />
            <Share />
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
