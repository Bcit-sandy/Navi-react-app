import styles from "./page.module.css";
import Button from "@/app/button/button";
import EventJoining from "@/app/BigComponents/EventJoining/EventJoining";

const Step2 = () => {
    return (
        <div className={styles.container}>
            <EventJoining />
        </div>
    );
};