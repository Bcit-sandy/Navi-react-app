"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./communitypost.module.css";
import Button from "@/app/button/button";

export default function CommunityPost({
    imgSm,
    name,
    date,
    content,
    imgLg,
    commentPic,
    commenter,
    commentDate,
    comment,
}) {
    const [isLiked, setIsLiked] = useState(false);
    const [isShared, setIsShared] = useState(false);
    const router = useRouter();

    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    const handleShareClick = () => {
        setIsShared(!isShared);
    };

    const handleAuthorClick = () => {
        router.push('/profile');
    };

    return (
        <div className={styles.postContainer}>
            <section className={styles.author} onClick={handleAuthorClick} style={{ cursor: 'pointer' }}>
                <img
                    src={imgSm}
                    alt={name}
                    className={styles.smallImage}
                />
                <div className={styles.postInfo}>
                    <h3 className={styles.name}>{name}</h3>
                    <p className={styles.date}>{date}</p>
                </div>
            </section>

            <p className={styles.content}>{content}</p>

            {imgLg && (
                <div className={styles.imageWrapper}>
                    <img
                        src={imgLg}
                        alt='Post visual content'
                        className={styles.largeImage}
                    />
                </div>
            )}
            <div className={styles.icons}>
                <div className={styles.interact}>
                    <Button
                        icon={isLiked ? '/filledheart.svg' : '/outlineheart.svg'}
                        className={styles.heart}
                        onClick={handleLikeClick}
                    />
                    <Button
                        icon='/comment.svg'
                        className={styles.comment}
                    />
                </div>
                <div className={styles.share}>
                    <Button
                        icon={isShared ? '/success.svg' : '/share.svg'}
                        className={styles.icon}
                        onClick={handleShareClick}
                    />
                </div>
            </div>
            <div className={styles.customBorder}></div>
            <section className={styles.commentSection}>
                <img
                    src={commentPic}
                    alt={commenter}
                    className={styles.commentPic}
                />
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <h4 className={styles.commenter}>{commenter}</h4>
                        <span className={styles.commentDate}>
                            {commentDate}
                        </span>
                    </div>
                    <p className={styles.commentText}>{comment}</p>
                </div>
            </section>
        </div>
    );
}
