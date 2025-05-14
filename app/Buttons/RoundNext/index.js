"use client";
import "./styles.css";

export function RoundNext({ direction = "right", disabled = false, onClick }) {
    return (
        <button
            className={`roundNext${disabled ? " roundNext-disabled" : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            <img
                className={`roundNext_icon${
                    direction === "left" ? " roundNext_icon-left" : ""
                }`}
                src='/arrow_right.svg'
                alt={direction === "left" ? "previous icon" : "next icon"}
            />
        </button>
    );
}
