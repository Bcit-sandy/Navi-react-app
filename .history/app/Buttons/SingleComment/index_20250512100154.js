"use client";

import "./styles.css";

// single comment component
export function SingleComment({
    author,
    date,
    content,
    profileImage = "/profile.svg",
}) {
    return (
        <div className='single-comment'>
            <img
                src={profileImage}
                alt='profile icon'
                className='author-image'
            />
            <div className='comment-content'>
                <div className='comment-header'>
                    <div className='author-details'>
                        <span className='author-name'>{author}</span>
                        <span className='comment-date'>{date}</span>
                    </div>
                </div>
                <p className='comment-text'>{content}</p>
            </div>
        </div>
    );
}
