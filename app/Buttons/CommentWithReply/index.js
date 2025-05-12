"use client";

import { useState } from "react";
import "./styles.css";

export function CommentWithReply({ 
    author = "Anonymous User",
    date = "Just now",
    content = "This is a sample comment.",
    avatar = "/default_avatar.svg",
    onReply = () => console.log("Reply clicked")
}) {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReply = () => {
        if (replyText.trim()) {
            onReply(replyText);
            setReplyText("");
            setIsReplying(false);
        }
    };

    return (
        <div className="commentWithReply">
            <div className="comment">
                <img src={avatar} alt={`${author}'s avatar`} className="avatar" />
                <div className="commentContent">
                    <div className="commentHeader">
                        <span className="username">{author}</span>
                        <span className="timestamp">{date}</span>
                    </div>
                    <p className="text">{content}</p>
                </div>
            </div>
            <div className="replySection">
                {isReplying ? (
                    <div className="replyInput">
                        <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Write a reply..."
                        />
                        <div className="replyActions">
                            <button 
                                className="cancelButton"
                                onClick={() => setIsReplying(false)}
                            >
                                Cancel
                            </button>
                            <button 
                                className="submitButton"
                                onClick={handleReply}
                            >
                                Reply
                            </button>
                        </div>
                    </div>
                ) : (
                    <button 
                        className="replyButton"
                        onClick={() => setIsReplying(true)}
                    >
                        Reply
                    </button>
                )}
            </div>
        </div>
    );
} 