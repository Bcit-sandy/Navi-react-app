"use client";
import { useRouter } from 'next/navigation';
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar"
import styles from "@/app/onboarding/step5/page.module.css";
import { LocationDropdown } from "@/app/UiElements/LocationDropdown";


export default function Step5() {
    const router = useRouter(); 

    const handlePrev = () => {
        router.push('/onboarding/step4');
    };

    const handleNext = () => {
        router.push('/onboarding/step6');
    };

    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
            <img className={styles.illustration} src="/onboarding_graphics/step5.svg" alt="graphics"></img>
            <div className={styles.text}>
            <h1 className={styles.question}>Alex, where do you call home?</h1>
            <h3 className={styles.supportingText}>We want to connect you with people near you!</h3>
            </div>
            <div className={styles.dropdown}>
                <LocationDropdown />
            </div>
            <div  className={styles.progress}>
            <OnboardProgressBar
        currentStep={5}
        totalSteps={6}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      </div>
                  </section> 
        </main>
    );
}