"use client";

import styles from "./button.module.css";
import classNames from "classnames";
import Image from "next/image";

//type: primary, secondary, success, outline, round, light, dark
//size: small, large
//isDisabled: boolean
//icon: svg in public folder
//value: string (optional)
//onClick: () => void (optional)
//color: light, dark
export default function Button({
    size,
    type,
    color,
    icon,
    isDisabled = false,
    value,
    onClick,
    className,
}) {
    const buttonClasses = classNames(
        styles.button,
        {
            [styles.small]: size === "small",
            [styles.medium]: size === "medium",
            [styles.large]: size === "large",
            [styles.xLarge]: size === "xLarge",
            [styles.primary]: type === "primary",
            [styles.neutral]: type === "neutral",
            [styles.success]: type === "success",
            [styles.outline]: type === "outline",
            [styles.community]: type === "community",
            [styles.round]: type === "round",
            [styles.underline]: type === "underline",
            [styles.post]: type === "post",
            [styles.lightblue]: color === "lightblue",
            [styles.blue]: color === "blue",
            [styles.beige]: color === "beige",
            [styles.disabled]: isDisabled,
        },
        className
    );

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={isDisabled}
        >
            {icon && (
                <Image
                    src={icon}
                    alt='button icon'
                    width={30}
                    height={30}
                    className={styles.icon}
                />
            )}
            {value && <span className={styles.value}>{value}</span>}
        </button>
    );
}
