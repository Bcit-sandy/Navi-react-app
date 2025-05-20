"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { OnboardProgressBar } from "@/app/BigComponents/OnboardProgressBar/OnboardProgressBar";
import styles from "@/app/onboarding/step4/page.module.css";
import { Tags } from "@/app/UiElements/Tags";

export default function Step4() {
    const router = useRouter();
    const [selectedTags, setSelectedTags] = useState([]);

    const [username, setUsername] = useState("");
   
    useEffect(() => {
    const storedUsername = localStorage.getItem("username");
       if (storedUsername) {
         setUsername(storedUsername);
       }
     }, []);

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

    const handleTagClick = (tag) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const handlePrev = () => {
        router.push("/onboarding/step3");
    };

    const handleNext = () => {
        router.push("/onboarding/step5");
    };

    return (
        <main className={styles.main_container}>
            <section className={styles.container}>
                <img
                    className={styles.illustration}
                    src='/onboarding_graphics/step4.svg'
                    alt='graphics'
                />
                <div className={styles.text}>
                    <h1 className={styles.question}>
                        {username}, <br />
                        What are you into?
                    </h1>
                    <h3 className={styles.supportingText}>
                        Select all that apply!
                    </h3>
                </div>
                <div className={styles.tags}>
                    {tagLabels.map((label) => (
                        <Tags
                            key={label}
                            label={label}
                            isSelected={selectedTags.includes(label)}
                            onClick={() => handleTagClick(label)}
                        />
                    ))}
                </div>
                <div className={styles.progress}>
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
