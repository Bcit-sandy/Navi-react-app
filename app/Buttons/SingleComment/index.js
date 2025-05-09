"use client";

import "./styles.css";

export function SingleComment({ comment }) {
    return (
        <div className="singleComment">
            <div className="commentHeader">
                <img 
                    src={comment.author.avatar} 
                    alt={comment.author.name} 
                    className="authorAvatar"
                />
                <div className="commentInfo">
                    <span className="authorName">{comment.author.name}</span>
                    <span className="commentDate">{comment.date}</span>
                </div>
            </div>
            <p className="commentText">{comment.text}</p>
        </div>
    );
}