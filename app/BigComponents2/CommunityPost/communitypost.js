"use client";
import { useState } from "react";
import { EventDateTag } from "@/app/Buttons/EventDateTag";
import styles from "@/app/BigComponents/CommunityPost/communitypost.module.css";
import * as Buttons from "@/app/Buttons/allbuttons";

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
    return (
        <div className={styles.postContainer}>
            <section className={styles.author}>
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
                    <Buttons.Heart />
                    <Buttons.Comment />
                </div>
                <div className={styles.share}>
                    <Buttons.Share />
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
