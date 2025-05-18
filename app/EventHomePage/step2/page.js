import styles from "./page.module.css";
import EventJoining from "@/app/BigComponents/EventJoining/EventJoining";
import Button from "@/app/button/button";
const Step2 = () => {
    return (
        <main className={styles.community_container}>
            <section className={styles.container}>
                <div className={styles.nav}>
                    <img
                        className={styles.return}
                        src='/return.svg'
                        alt='return'
                    />
                </div>

                <div className={styles.header}>
                    <div className={styles.author_container}>
                        <img
                            src='/homepage_images/alex_smith.jpg'
                            alt='name'
                            className={styles.smallImage}
                        />
                        <div className={styles.author_info}>
                            <p className={styles.name}>alexsmith12 </p>
                        </div>
                    </div>

                    <div className={styles.location_info}>
                        <img
                            className={styles.location}
                            src='/location.svg'
                            alt='location'
                        />
                        <p className={styles.location_name}>4351 Number, Richmond</p>
                    </div>
                </div>

                <div className={styles.event_post_container}>
                    <img 
                        src='/event/event1.jpg'
                        alt='event'
                        className={styles.event_post_image}
                    />
                    <p className={styles.event_post_info}>April 8th, 2024 | 12:00PM - 6:00PM</p>
                    <p className={styles.event_post_title}> Badminton - Outdoor activities for beginner</p>
                    <div className={styles.event_post_button_container}>
                        <Button
                            className={styles.event_post_button}
                            type='primary'
                            value='Sports'
                            size='small'
                            isDisabled={true}
                        />
                        <Button
                            className={styles.event_post_button}
                            type='primary'
                            value='Badminton'
                            size='small'
                            isDisabled={true}
                    />
                    <Button
                            className={styles.event_post_button}
                            type='primary'
                            value='Outdoor Activities'
                            size='small'
                            isDisabled={true}
                    />
                    </div>
                    <div className={styles.event_post_description}>
                    <p className={styles.event_post_description_text}> Badminton is a great sport for all ages and skill levels.
                    Many community centres offer a range of badminton activities, such as drop-in sessions, court rentals, and instructional programs.</p>
                    </div>


                </div>




            
                <div className={styles.event_joining_container}>
                    <EventJoining
                        title = "Badminton for beginner"
                        time = "12:00PM - 6:00PM"
                        users = {[
                            { id: 1, name: "User 1", avatar: "/avatar/avatar1.jpg" },
                            { id: 2, name: "User 2", avatar: "/avatar/avatar2.jpg" },
                            { id: 3, name: "User 3", avatar: "/avatar/avatar3.jpg" },
                            { id: 4, name: "User 4", avatar: "/avatar/avatar4.jpg" },  
                        ]}
                    />
                </div>
            </section>
        </main>
    );
};

export default Step2;
