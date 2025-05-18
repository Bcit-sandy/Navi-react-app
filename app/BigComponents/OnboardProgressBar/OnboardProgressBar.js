"use client";

import React from 'react';
import Button from "@/app/button/button";
import styles from "./OnboardProgressBar.module.css";  // <--- THIS IS REQUIRED

export function OnboardProgressBar({
    currentStep = 2,
    totalSteps = 6,
    onPrev,
    onNext,
}) {
    const isFirst = currentStep === 1||6;

    return (
        <div className={styles.progressBarContainer}>
            <Button
  icon="/arrowback.svg"
  type="round"
  color="blue"   // you can keep this or remove if using className for color
  isDisabled={isFirst}
  onClick={isFirst ? undefined : onPrev}
  className={isFirst ? styles.firstStepBackButton : styles.activeBackButton}
/>

            

            <div className={styles.dotsContainer}>
                {Array.from({ length: totalSteps }).map((_, idx) => (
                    <span
                        key={idx}
                        className={
                            idx + 1 === currentStep
                                ? styles.activeDot
                                : styles.inactiveDot
                        }
                    ></span>
                ))}
            </div>

            <Button
                icon="/arrowforward.svg"
                type="round"
                color="blue"
                onClick={onNext}
            />
        </div>
    );
}
