"use client";
import { EventJoining } from "./EventJoining/EventJoining";
import { ProfileTopNav } from "./ProfileTopNav/ProfileTopNav";
import { OnboardProgressBar } from "./OnboardProgressBar/OnboardProgressBar";
import NavBar from "./NavBar/navbar";
import { EventPost } from "./EventPost/EventPost";
import CommunityPost from "./CommunityPost/communitypost";
import EventSlider from "./EventSliders/eventslider";
export default function BigComponentsPage() {
    return (
        <div>
            <h1>Big Components Showcase</h1>
            
            <section>
                <h2>Event Joining</h2>
                <EventJoining 
                    title="Badminton for beginner"
                    time="12:00PM - 6:00PM"
                    users={[
                        { id: 1, name: "User 1", avatar: "/avatar1.jpg" },
                        { id: 2, name: "User 2", avatar: "/avatar2.jpg" }
                    ]}
                    onJoin={(isJoined) => console.log("Join status:", isJoined)}
                    onShare={() => console.log("Share clicked")}
                />
            </section>

            <section>
                <h2>Profile Top Nav</h2>
                <ProfileTopNav />
            </section>

            <section>
                <h2>Onboard Progress Bar</h2>
                <OnboardProgressBar />
            </section>

            <section>
                <h2>Nav Bar</h2>
                <NavBar />
            </section>

            <section>
                <h2>Event Post</h2>
                <EventPost />
            </section>

            <section>
                <h2>Community Post</h2>
                <CommunityPost 
                    imgSm="/avatar1.jpg"
                    name="John Doe"
                    date="2 hours ago"
                    content="This is a sample post content"
                    imgLg="/sample-image.jpg"
                    commentPic="/avatar2.jpg"
                    commenter="Jane Smith"
                    commentDate="1 hour ago"
                    comment="Great post! Thanks for sharing."
                />
            </section>

            <section>
                <h2>Event Slider</h2>
                <EventSlider />
            </section>

            
        </div>
    );
}
