"use client";
import Avatar from "../components/Avatar/Avatar";

export default function TestAvatarPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Avatar Component Test</h1>
            <div className="flex items-center gap-4">
                <Avatar 
                    src="/avatar1.jpg"
                    size="small"
                    onClick={() => console.log("Small avatar clicked")}
                />
                <Avatar 
                    src="/avatar2.jpg"
                    size="medium"
                    onClick={() => console.log("Medium avatar clicked")}
                />
                <Avatar 
                    src="/avatar3.jpg"
                    size="large"
                    onClick={() => console.log("Large avatar clicked")}
                />
                <Avatar 
                    src="/avatar4.jpg"
                    size="xlarge"
                    onClick={() => console.log("XLarge avatar clicked")}
                />
            </div>
        </div>
    );
} 