"use client";
import React, { useState } from 'react';
import Image from "next/image";
import styles from "./OnboardProgressBar.module.css";
import Button from "@/app/button/button";

export function OnboardProgressBar({
    currentStep = 2,
    totalSteps = 6,
    onPrev,
    onNext,
}) {
    const isFirst = currentStep === 1;
    const isLast = currentStep === totalSteps;
    return (
        <div className={styles.progressBarContainer}>
            <Button
                icon="arrowback.svg"
                type="round"
                color="lightblue"
                isDisabled="disabled"
                onClick={isFirst ? undefined : onPrev}
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
                icon="arrowforward.svg"
                type="round"
                color="blue"
                onClick={onNext}
            />
        </div>
    );
}
