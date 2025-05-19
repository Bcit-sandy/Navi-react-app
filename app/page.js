"use client";
import { useRouter } from "next/navigation";
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar";
import styles from "@/app/onboarding/step1/page.module.css";
import { Username } from "@/app/components/textfield";

export default function Step1() {
    const router = useRouter();

    const handleNext = () => {
        router.push("/onboarding/step2");
    };

    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
                <img
                    className={styles.blob}
                    src='/onboarding_graphics/topLeftBlob.svg'
                    alt='graphics'
                ></img>
                <img
                    className={styles.illustration}
                    src='/onboarding_graphics/step1.svg'
                    alt='graphics'
                ></img>
                <div className={styles.text}>
                    <h1 className={styles.question}>What is your name?</h1>
                    <h3 className={styles.supportingText}>
                        Pleased to meet you!
                    </h3>
                </div>
                <div className={styles.input}>
                    <Username />
                </div>
                <div className={styles.progress}>
                    <OnboardProgressBar
                        currentStep={1}
                        totalSteps={6}
                        onNext={handleNext}
                    />
                </div>
            </section>
        </main>
    );
}
 