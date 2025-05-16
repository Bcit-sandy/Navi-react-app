"use client";
import React, { useState } from 'react';
import Image from "next/image";
import styles from "./OnboardProgressBar.module.css";
import { RoundNext } from "@/app/Buttons/allbuttons";

export function OnboardProgressBar({
    currentStep = 1,
    totalSteps = 6,
    onPrev,
    onNext,
}) {
    const isFirst = currentStep === 1;
    const isLast = currentStep === totalSteps;
    return (
        <div className={styles.progressBarContainer}>
            <RoundNext
                direction='left'
                disabled={isFirst}
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
            <RoundNext
                direction='right'
                disabled={isLast}
                onClick={onNext}
            />
        </div>
    );
}
