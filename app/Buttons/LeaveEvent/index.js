"use client";
import { useState } from "react";
import "./styles.css";

export function LeaveEvent() {
    const [activeButton, setActiveButton] = useState(null);

    function handleClick(button) {
        setActiveButton(button);
    }

    return (
        <div className='leaveEvent'>
            <p className='leaveEvent_text'>Do you want to leave this event?</p>
            <div className='leaveEvent_options'>
                <button
                    className={`leaveEvent_yes ${
                        activeButton === "yes"
                            ? "leaveEvent_yes-active"
                            : "leaveEvent_yes-inactive"
                    }`}
                    onClick={() => handleClick("yes")}>
                    Yes, I would like to leave
                </button>
                <button
                    className={`leaveEvent_no ${
                        activeButton === "no"
                            ? "leaveEvent_no-active"
                            : "leaveEvent_no-inactive"
                    }`}
                    onClick={() => handleClick("no")}>
                    No, I would like to stay
                </button>
            </div>
        </div>
    );
} 