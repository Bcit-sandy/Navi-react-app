"use client";
import { Post } from "../components/Post/Post";

export default function TestPostPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Post Button Test Page</h1>
            <div style={{ marginTop: '20px' }}>
                <Post />
                <Post label="Create Post →" />
            </div>
        </div>
    );
} 