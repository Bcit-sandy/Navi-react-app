"use client";
import Dropdown from "../components/Dropdown/Dropdown";
import Avatar from "../components/Avatar/Avatar";
import Button from "../components/Button/Button";

export default function TestDropdownPage() {
    const userMenuItems = [
        {
            label: "Profile",
            icon: "👤",
            onClick: () => console.log("Profile clicked")
        },
        {
            label: "Settings",
            icon: "⚙️",
            onClick: () => console.log("Settings clicked")
        },
        {
            label: "Logout",
            icon: "🚪",
            onClick: () => console.log("Logout clicked")
        }
    ];

    const actionMenuItems = [
        {
            label: "Edit",
            icon: "✏️",
            onClick: () => console.log("Edit clicked")
        },
        {
            label: "Delete",
            icon: "🗑️",
            onClick: () => console.log("Delete clicked")
        },
        {
            label: "Share",
            icon: "📤",
            onClick: () => console.log("Share clicked")
        }
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dropdown Component Test</h1>
            <div className="flex gap-4">
                <Dropdown
                    trigger={<Avatar src="/avatar1.jpg" size="medium" />}
                    items={userMenuItems}
                    align="right"
                />
                <Dropdown
                    trigger={
                        <Button 
                            label="Actions"
                            variant="secondary"
                        />
                    }
                    items={actionMenuItems}
                    align="left"
                />
            </div>
        </div>
    );
} 