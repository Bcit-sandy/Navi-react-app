"use client";
import { useRouter } from 'next/navigation';
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar"
import styles from "@/app/onboarding/step2/page.module.css";
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
            <img className={styles.illustration} src="/onboarding_graphics/step2.svg" alt="graphics"></img>
            <div className={styles.text}>
            <h1 className={styles.question}>Lets make a <br />display name as well!</h1>
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