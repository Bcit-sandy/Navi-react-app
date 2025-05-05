"use client";
import { Tags } from "../components/Tags/Tags";

export default function TestTagsPage() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>Tags Test Page</h1>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Tags label="Technology" />
                <Tags label="Education" isSelected={true} />
                <Tags label="Sports" />
                <Tags label="Music" />
            </div>
        </div>
    );
} 