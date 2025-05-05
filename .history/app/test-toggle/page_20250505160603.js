"use client";
import { useState } from "react";
import Toggle from "../components/Toggle/Toggle";

export default function TestTogglePage() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Toggle Component Test</h1>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Sizes</h2>
                    <div className="flex flex-col gap-4">
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            label="Small Toggle"
                            size="small"
                        />
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            label="Medium Toggle"
                            size="medium"
                        />
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            label="Large Toggle"
                            size="large"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Without Label</h2>
                    <div className="flex gap-4">
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            size="small"
                        />
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            size="medium"
                        />
                        <Toggle
                            checked={checked}
                            onChange={(e) => setChecked(e.target.checked)}
                            size="large"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 