"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/onboarding/step6/page.module.css";
import Button from "@/app/button/button";
import { useEffect, useState } from "react";

const Step6 = () => {
    const router = useRouter();

    const handleExplore = () => {
        router.push('/CommunityHomePage/step1');
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
            <img className={styles.illustration} src="/onboarding_graphics/step6.svg" alt="graphics"></img>
            <div className={styles.text}>
            <h1 className={styles.question}>Welcome {username}!</h1>
            </div>
            <div className={styles.explore}>
                        <Button
                            size="xLarge"
                            type="primary"
                            value="Let's go explore!"
                            round="round"
                            onClick={handleExplore}
                         />
                         </div>
            <div className={styles.blob}> 
            <img src="/onboarding_graphics/bottomLeftBlob.svg" alt="graphics"></img>
            <img src="/onboarding_graphics/bottomRightBlob.svg" alt="graphics"></img>
            </div>
            </section>
        </main>
    );
};

export default Step6;