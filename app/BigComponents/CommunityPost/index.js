"use client";
import { useState } from "react";
import "./styles.css";
import "./globals.css";
import { EventDateTag } from "@/app/Buttons/EventDateTag";

export function CommunityPost({ onClick }) {
    return (
        <div>
            <EventDateTag />
        </div>
    );
}
