"use client";

import { useState } from "react";
import "./styles.css";

export function CommentWithReply() {
    return (
        <div className='comment-thread'>
            <div className='single-comment'>
                <img
                    src='/profile.svg'
                    alt='profile'
                    width={32}
                    height={32}
                    className='author-image'
                />
                <div className='comment-content'>
                    <div className='author-details'>
                        <span className='author-name'>Gwen Stacy</span>
                        <span className='comment-date'>May 1, 2025</span>
                    </div>
                    <p className='comment-text'>Wow very nice haha!</p>
                </div>
            </div>

            <div className='reply-comment'>
                <div className='reply-line'></div>
                <div className='reply-line-horizontal'></div>
                <div className='single-comment'>
                    <img
                        src='/profile.svg'
                        alt='profile'
                        width={26}
                        height={26}
                        className='author-image'
                    />
                    <div className='comment-content'>
                        <div className='author-details'>
                            <span className='author-name'>John Adam </span>
                            <span className='comment-date'>2m</span>
                        </div>
                        <p className='comment-text'>WOWOWOW</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
