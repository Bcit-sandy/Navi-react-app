"use client";

import { useState } from "react";
import "./styles.css";

export function AnonymousToggle() {
    const [toggled, setToggled] = useState(false);

    return (
        <div className='anonymousToggle'>
            <button
                className={`toggle-btn ${toggled ? "toggled" : ""}`}
                onClick={() => setToggled(!toggled)}
            >
                <div className='thumb'>
                    {toggled ? (
                        <img
                            src='/anonymous-off.svg'
                            alt='anonymous on'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    ) : (
                        <img
                            src='/anonymous.svg'
                            alt='anonymous off'
                            width={12}
                            height={12}
                            className='icon'
                        />
                    )}
                </div>
            </button>
        </div>
    );
}
