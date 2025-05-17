"use client";
import { useRouter } from 'next/navigation';
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar"
import styles from "@/app/onboarding/step1/page.module.css";
import { Username } from "@/app/components/textfield";


export default function Step2() {
    const router = useRouter(); 

    const handlePrev = () => {
        router.push('/onboarding/step1');
    };

    const handleNext = () => {
        router.push('/onboarding/step3');
    };

    return (
        <main>
            <section className={styles.container}>
            <img className={styles.blob} src="/onboarding_graphics/topLeftBlob.svg" alt="graphics"></img>
            <img className={styles.illustration} src="/onboarding_graphics/step2.svg" alt="graphics"></img>
            <div className={styles.text}>
            <h1 className={styles.question}>What is your name?</h1>
            <h3 className={styles.supportingText}>Pleased to meet you!</h3>
            </div>
            <div className={styles.input}>
            <Username />
            </div>
            <div  className={styles.progress}>
            <OnboardProgressBar
        currentStep={2}
        totalSteps={6}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      </div>
            </section>
        </main>
    );
}