"use client";

import "./styles.css";

export function SingleComment({ author, date, content }) {
    return (
        <div className="singleComment">
            <div className="commentHeader">
                <img 
                    src="/default_avatar.svg"
                    alt={author}
                    className="authorAvatar"
                />
                <div className="authorInfo">
                    <span className="authorName">{author}</span>
                    <span className="commentDate">{date}</span>
                </div>
            </div>
            <p className="commentContent">{content}</p>
        </div>
    );
} 