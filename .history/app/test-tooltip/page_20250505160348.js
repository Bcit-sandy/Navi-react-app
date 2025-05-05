"use client";
import Tooltip from "../components/Tooltip/Tooltip";
import Button from "../components/Button/Button";
import Avatar from "../components/Avatar/Avatar";

export default function TestTooltipPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tooltip Component Test</h1>
            <div className="flex flex-col gap-8 items-center">
                <div className="flex gap-4">
                    <Tooltip content="Top tooltip" position="top">
                        <Button label="Top" />
                    </Tooltip>
                    <Tooltip content="Bottom tooltip" position="bottom">
                        <Button label="Bottom" />
                    </Tooltip>
                </div>
                <div className="flex gap-4">
                    <Tooltip content="Left tooltip" position="left">
                        <Button label="Left" />
                    </Tooltip>
                    <Tooltip content="Right tooltip" position="right">
                        <Button label="Right" />
                    </Tooltip>
                </div>
                <div className="flex gap-4">
                    <Tooltip content="User profile">
                        <Avatar src="/avatar1.jpg" size="medium" />
                    </Tooltip>
                    <Tooltip content="Settings">
                        <Button label="⚙️" variant="secondary" />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
} 