"use client";

import Image from "next/image";
import "./styles.css";

export function UserCircles({ users = [] }) {
    return (
        <div className='user-circles'>
            {/* More indicator circle */}
            <div className='circle more-circle'>
                <div className='dots'>
                    <span className='dot'></span>
                    <span className='dot'></span>
                    <span className='dot'></span>
                </div>
            </div>

            {/* User circles */}
            {users &&
                users.map((user, index) => (
                    <div
                        key={index}
                        className='circle'
                    >
                        <Image
                            src={user.avatar}
                            alt={user.name}
                            width={20}
                            height={20}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                ))}
        </div>
    );
}
