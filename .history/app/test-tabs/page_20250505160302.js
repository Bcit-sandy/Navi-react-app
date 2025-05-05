"use client";
import Tabs from "../components/Tabs/Tabs";
import Card from "../components/Card/Card";

export default function TestTabsPage() {
    const tabs = [
        {
            label: "Events",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card
                        title="Event 1"
                        description="Description for event 1"
                        image="/event1.jpg"
                    />
                    <Card
                        title="Event 2"
                        description="Description for event 2"
                        image="/event2.jpg"
                    />
                    <Card
                        title="Event 3"
                        description="Description for event 3"
                        image="/event3.jpg"
                    />
                </div>
            )
        },
        {
            label: "Community",
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Card
                        title="Post 1"
                        description="Description for post 1"
                        image="/post1.jpg"
                    />
                    <Card
                        title="Post 2"
                        description="Description for post 2"
                        image="/post2.jpg"
                    />
                    <Card
                        title="Post 3"
                        description="Description for post 3"
                        image="/post3.jpg"
                    />
                </div>
            )
        },
        {
            label: "Settings",
            content: (
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Account Settings</h3>
                        <p>Manage your account preferences and security settings.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Notification Settings</h3>
                        <p>Configure how you receive notifications.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                        <h3 className="text-lg font-semibold mb-2">Privacy Settings</h3>
                        <p>Control your privacy and data sharing preferences.</p>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tabs Component Test</h1>
            <Tabs tabs={tabs} />
        </div>
    );
} 