"use client";

import { useState } from "react";
import "./styles.css";

export function CommentWithReply({ comment, onReply }) {
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");

    const handleReply = () => {
        if (replyText.trim() && onReply) {
            onReply(replyText);
            setReplyText("");
            setIsReplying(false);
        }
    };

    return (
        <div className="commentWithReply">
            <div className="comment">
                <img src={comment.avatar} alt="User Avatar" className="avatar" />
                <div className="commentContent">
                    <div className="commentHeader">
                        <span className="username">{comment.username}</span>
                        <span className="timestamp">{comment.timestamp}</span>
                    </div>
                    <p className="text">{comment.text}</p>
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