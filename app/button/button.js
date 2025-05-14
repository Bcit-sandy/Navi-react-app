"use client";

import styles from "./button.module.css";
import classNames from "classnames";
import "../globals.css";
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
    onClick
}) {
    const buttonClasses = classNames(
      styles.button, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.primary]: type === "primary",
        [styles.neutral]: type === "neutral",
        [styles.success]: type === "success",
        [styles.outline]: type === "outline",
        [styles.post]: type === "post",
        [styles.round]: type === "round",
        [styles.lightblue]: color === "lightblue",
        [styles.beige]: color === "beige",
        [styles.disabled]: isDisabled,
    });

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={isDisabled}
        >
            {icon && (
                <Image
                    src={`/${icon}`}
                    alt="button icon"
                    width={25}
                    height={25}
                    className={styles.icon}
                />
            )}
            {value}
        </button>
    );
}
