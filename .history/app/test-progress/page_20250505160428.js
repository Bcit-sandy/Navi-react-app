"use client";
import { useState, useEffect } from "react";
import Progress from "../components/Progress/Progress";

export default function TestProgressPage() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 10;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Progress Component Test</h1>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Sizes</h2>
                    <Progress value={progress} size="small" />
                    <Progress value={progress} size="medium" />
                    <Progress value={progress} size="large" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Colors</h2>
                    <Progress value={progress} color="primary" />
                    <Progress value={progress} color="success" />
                    <Progress value={progress} color="warning" />
                    <Progress value={progress} color="error" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Without Label</h2>
                    <Progress value={progress} showLabel={false} />
                </div>
            </div>
        </div>
    );
} 