"use client";
import "./styles.css";

export function ParticipantField() {
    return (
        <input
            type="number"
            placeholder="Enter number here"
            className="participantField"
            min="0"
            inputMode="numeric"
            pattern="[0-9]*"
        />
    );
} 