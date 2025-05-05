"use client";
import { Join } from "../components/Join/Join";

export default function TestJoinPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Join Button Test Page</h1>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <Join />
                <Join isJoined={true} />
            </div>
        </div>
    );
} 