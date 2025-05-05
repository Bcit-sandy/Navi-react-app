"use client";
import Search from "../components/Search/Search";

export default function TestSearchPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Component Test</h1>
            <div className="flex gap-4">
                <Search 
                    placeholder="Search for events..."
                    onChange={(e) => console.log("Search input:", e.target.value)}
                />
            </div>
        </div>
    );
} 