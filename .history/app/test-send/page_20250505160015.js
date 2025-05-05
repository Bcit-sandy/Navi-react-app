"use client";
import Send from "../components/Send/Send";

export default function TestSendPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Send Button Test</h1>
            <div className="flex gap-4">
                <Send onClick={() => console.log("Send clicked")} />
            </div>
        </div>
    );
} 