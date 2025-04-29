"use client";
import Link from "next/link";
import "./module.button.css";

export function Navbar() {
    return (
        <nav className='navbar'>
            <div className='nav-links'>
                <Link
                    href='/community'
                    className='nav-link'
                >
                    Community
                </Link>
                <Link
                    href='/events'
                    className='nav-link'
                >
                    Events
                </Link>
            </div>
        </nav>
    );
}
