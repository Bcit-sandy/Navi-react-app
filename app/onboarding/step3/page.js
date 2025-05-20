"use client";
import { useRouter } from "next/navigation";
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar";
import styles from "@/app/onboarding/step3/page.module.css";
import { StudentCategories } from "@/app/UiElements/StudentCategories";
import { useEffect, useState } from "react";

export default function Step3() {
    const router = useRouter();

    const handlePrev = () => {
        router.push("/onboarding/step2");
    };

    const handleNext = () => {
        router.push("/onboarding/step4");
    };

    const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
                <img
                    className={styles.blob}
                    src='/onboarding_graphics/topRightBlob.svg'
                    alt='graphics'
                ></img>
                <div className={styles.text}>
                    <h1 className={styles.question}>
                        Hi {username}, <br />
                        Which one describes <br /> you best?
                    </h1>
                </div>
                <div className={styles.select}>
                    <StudentCategories />
                </div>
                <div className={styles.progress}>
                    <OnboardProgressBar
                        currentStep={3}
                        totalSteps={6}
                        onPrev={handlePrev}
                        onNext={handleNext}
                    />
                </div>
            </section>
        </main>
    );
}
