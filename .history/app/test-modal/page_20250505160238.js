"use client";
import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Button from "../components/Button/Button";

export default function TestModalPage() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Modal Component Test</h1>
            <Button 
                label="Open Modal"
                onClick={() => setIsOpen(true)}
            />
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title="Modal Title"
                footer={
                    <div className="flex gap-2">
                        <Button 
                            label="Cancel"
                            variant="secondary"
                            onClick={() => setIsOpen(false)}
                        />
                        <Button 
                            label="Confirm"
                            onClick={() => {
                                console.log("Confirmed");
                                setIsOpen(false);
                            }}
                        />
                    </div>
                }
            >
                <div className="space-y-4">
                    <p>This is the modal content. You can put any content here.</p>
                    <p>It can include:</p>
                    <ul className="list-disc pl-5">
                        <li>Text</li>
                        <li>Lists</li>
                        <li>Forms</li>
                        <li>Images</li>
                        <li>Other components</li>
                    </ul>
                </div>
            </Modal>
        </div>
    );
} 