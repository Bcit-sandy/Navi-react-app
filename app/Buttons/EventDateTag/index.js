"use client";

import "./styles.css";

export function EventDateTag({ date }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <span className="eventDateTag">
            {formatDate(date)}
        </span>
    );
} 