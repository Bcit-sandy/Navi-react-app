"use client";
import Accordion from "../components/Accordion/Accordion";

export default function TestAccordionPage() {
    const items = [
        {
            title: "What is NAvi?",
            content: "NAvi is a community-driven platform that helps people discover and participate in local events and activities. It connects people with shared interests and makes it easy to find and join events in your area."
        },
        {
            title: "How do I join an event?",
            content: "To join an event, simply find an event you're interested in and click the 'Join' button. You'll receive a confirmation and any additional details about the event. Make sure to check the event requirements and bring any necessary items."
        },
        {
            title: "Can I create my own events?",
            content: "Yes! You can create your own events by clicking the 'Create Event' button. Fill in the event details, set the date and time, and specify any requirements. Once published, other users can find and join your event."
        },
        {
            title: "How do I manage my events?",
            content: "You can manage your events through your profile page. Here you can view all events you've created or joined, update event details, and communicate with participants. You can also cancel events if needed."
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Accordion Component Test</h1>
            <div className="space-y-8">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Single Open</h2>
                    <Accordion items={items} />
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-4">Multiple Open</h2>
                    <Accordion items={items} allowMultiple={true} />
                </div>
            </div>
        </div>
    );
} 