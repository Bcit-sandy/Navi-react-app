"use client";
import { useRouter } from 'next/navigation';
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar"
import styles from "@/app/onboarding/step4/page.module.css";
import { Tags } from "@/app/Buttons/Tags";


export default function Step4() {
    const router = useRouter(); 

    const tagLabels = [
        "Sports",
        "Outdoor Activities",
        "Movies",
        "Music",
        "Video Games",
        "Cafe Hopping",
        "Reading",
        "Arts",
        "Food",
        "Dancing",
        "Learning",
        "Board Games",
    ];

    const handlePrev = () => {
        router.push('/onboarding/step3');
    };

    const handleNext = () => {
        router.push('/onboarding/step5');
    };

    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
            <img className={styles.illustration} src="/onboarding_graphics/step4.svg" alt="graphics"></img>
            <div className={styles.text}>
            <h1 className={styles.question}>Alex, <br />What are you into?</h1>
            <h3 className={styles.supportingText}>Select all that apply!</h3>
            </div>
            <div  className={styles.tags}>
{tagLabels.map((label) => (
      <Tags key={label} label={label} />
    ))}            </div>
            <div  className={styles.progress}>
            <OnboardProgressBar
        currentStep={4}
        totalSteps={6}
        onPrev={handlePrev}
        onNext={handleNext}
      />
      </div>
                  </section>
        </main>
    );
}