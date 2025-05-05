"use client";
import { Heart } from "../components/Heart/Heart";

export default function TestHeartPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Heart Button Test Page</h1>
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <Heart size="small" />
                <Heart size="small" isLiked={true} />
                <Heart size="large" />
                <Heart size="large" isLiked={true} />
            </div>
        </div>
    );
} 