"use client";
import { useState } from "react";
import Notification from "../components/Notification/Notification";

export default function TestNotificationPage() {
    const [notifications, setNotifications] = useState([
        { id: 1, type: "info", message: "This is an info notification" },
        { id: 2, type: "success", message: "Operation completed successfully" },
        { id: 3, type: "warning", message: "Please review your changes" },
        { id: 4, type: "error", message: "An error occurred" }
    ]);

    const handleClose = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Notification Component Test</h1>
            <div className="flex flex-col gap-2">
                {notifications.map(notification => (
                    <Notification
                        key={notification.id}
                        type={notification.type}
                        message={notification.message}
                        onClose={() => handleClose(notification.id)}
                    />
                ))}
            </div>
        </div>
    );
} 