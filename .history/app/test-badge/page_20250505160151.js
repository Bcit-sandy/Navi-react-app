"use client";
import Badge from "../components/Badge/Badge";

export default function TestBadgePage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Badge Component Test</h1>
            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <Badge label="Default" type="default" size="small" />
                    <Badge label="Success" type="success" size="small" />
                    <Badge label="Warning" type="warning" size="small" />
                    <Badge label="Error" type="error" size="small" />
                    <Badge label="Info" type="info" size="small" />
                </div>
                <div className="flex gap-2">
                    <Badge label="Default" type="default" size="medium" />
                    <Badge label="Success" type="success" size="medium" />
                    <Badge label="Warning" type="warning" size="medium" />
                    <Badge label="Error" type="error" size="medium" />
                    <Badge label="Info" type="info" size="medium" />
                </div>
                <div className="flex gap-2">
                    <Badge label="Default" type="default" size="large" />
                    <Badge label="Success" type="success" size="large" />
                    <Badge label="Warning" type="warning" size="large" />
                    <Badge label="Error" type="error" size="large" />
                    <Badge label="Info" type="info" size="large" />
                </div>
            </div>
        </div>
    );
} 