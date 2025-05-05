"use client";
import { useState } from "react";
import Toast from "../components/Toast/Toast";
import Button from "../components/Button/Button";

export default function TestToastPage() {
    const [toasts, setToasts] = useState([]);

    const addToast = (type, message) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, type, message }]);
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Toast Component Test</h1>
            <div className="flex gap-4">
                <Button
                    label="Info Toast"
                    onClick={() => addToast("info", "This is an info message")}
                />
                <Button
                    label="Success Toast"
                    onClick={() => addToast("success", "Operation completed successfully")}
                />
                <Button
                    label="Warning Toast"
                    onClick={() => addToast("warning", "Please review your changes")}
                />
                <Button
                    label="Error Toast"
                    onClick={() => addToast("error", "An error occurred")}
                />
            </div>
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    type={toast.type}
                    message={toast.message}
                    onClose={() => removeToast(toast.id)}
                />
            ))}
        </div>
    );
} 