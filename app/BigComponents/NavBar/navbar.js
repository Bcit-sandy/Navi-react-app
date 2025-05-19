"use client";
import styles from "@/app/BigComponents/NavBar/navbar.module.css";
import Button from "@/app/button/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();

    const handleProfileClick = () => {
        router.push('/profile');
    };

    return (
        <main className={styles.navBar_container}>
            <div className={styles.logo}>
                <img
                    className={styles.logo_img}
                    src='/logo_light.svg'
                    alt='logo'
                ></img>
                <h1 className={styles.logo_text}>Navi</h1>
            </div>

            <div className={styles.icons}>
                <Button
                    icon='/search.svg'
                    className={styles.search}
                />
                <Button
                    icon='/profile.svg'
                    className={styles.profile}
                    onClick={handleProfileClick}
                />
            </div>
        </main>
    );
}