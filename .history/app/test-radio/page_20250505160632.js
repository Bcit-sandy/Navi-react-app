"use client";
import { useState } from "react";
import Radio from "../components/Radio/Radio";

export default function TestRadioPage() {
    const [selectedSize, setSelectedSize] = useState("medium");
    const [selectedColor, setSelectedColor] = useState("blue");

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Radio Component Test</h1>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Sizes</h2>
                    <div className="flex flex-col gap-4">
                        <Radio
                            name="size"
                            value="small"
                            checked={selectedSize === "small"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            label="Small Radio"
                            size="small"
                        />
                        <Radio
                            name="size"
                            value="medium"
                            checked={selectedSize === "medium"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            label="Medium Radio"
                            size="medium"
                        />
                        <Radio
                            name="size"
                            value="large"
                            checked={selectedSize === "large"}
                            onChange={(e) => setSelectedSize(e.target.value)}
                            label="Large Radio"
                            size="large"
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Colors</h2>
                    <div className="flex flex-col gap-4">
                        <Radio
                            name="color"
                            value="blue"
                            checked={selectedColor === "blue"}
                            onChange={(e) => setSelectedColor(e.target.value)}
                            label="Blue"
                        />
                        <Radio
                            name="color"
                            value="red"
                            checked={selectedColor === "red"}
                            onChange={(e) => setSelectedColor(e.target.value)}
                            label="Red"
                        />
                        <Radio
                            name="color"
                            value="green"
                            checked={selectedColor === "green"}
                            onChange={(e) => setSelectedColor(e.target.value)}
                            label="Green"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 