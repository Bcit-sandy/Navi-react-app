"use client";
import styles from "./Card.module.css";

export function Card({ 
    title,
    description,
    image,
    footer,
    onClick
}) {
    return (
        <div 
            className={styles.card}
            onClick={onClick}
        >
            {image && (
                <div className={styles.cardImage}>
                    <img 
                        src={image}
                        alt={title}
                        className={styles.image}
                    />
                </div>
            )}
            <div className={styles.cardContent}>
                {title && <h3 className={styles.cardTitle}>{title}</h3>}
                {description && <p className={styles.cardDescription}>{description}</p>}
            </div>
            {footer && <div className={styles.cardFooter}>{footer}</div>}
        </div>
    );
} 