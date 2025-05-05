"use client";
import Card from "../components/Card/Card";
import Badge from "../components/Badge/Badge";
import Avatar from "../components/Avatar/Avatar";

export default function TestCardPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Card Component Test</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card
                    title="Event Title"
                    description="This is a description of the event. It can be multiple lines long and will wrap appropriately."
                    image="/event1.jpg"
                    footer={
                        <div className="flex items-center justify-between w-full">
                            <Badge label="Upcoming" type="success" />
                            <Avatar src="/avatar1.jpg" size="small" />
                        </div>
                    }
                    onClick={() => console.log("Card clicked")}
                />
                <Card
                    title="Community Post"
                    description="A post from the community with some interesting content."
                    image="/post1.jpg"
                    footer={
                        <div className="flex items-center justify-between w-full">
                            <Badge label="New" type="info" />
                            <Avatar src="/avatar2.jpg" size="small" />
                        </div>
                    }
                    onClick={() => console.log("Card clicked")}
                />
                <Card
                    title="Announcement"
                    description="Important announcement for all members."
                    image="/announcement1.jpg"
                    footer={
                        <div className="flex items-center justify-between w-full">
                            <Badge label="Important" type="warning" />
                            <Avatar src="/avatar3.jpg" size="small" />
                        </div>
                    }
                    onClick={() => console.log("Card clicked")}
                />
            </div>
        </div>
    );
} 