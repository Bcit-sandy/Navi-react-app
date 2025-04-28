'use client'

import Image from "next/image";
import { Tags, SignUp, SignIn, Heart } from "./_ui/buttons";
import { useState } from "react";

export default function Page() {
  
    const [selectedTags, setSelectedTags] = useState([]);
    const [heartState, setHeartState] = useState("empty");
    const tags = ["Sports", "Outdoor Activities", "Movies", "Music", "Video Games","Cafe Hopping","Reading","Arts","Food","Dancing","Learning","Board Games"];
    
    const handleTagClick = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    const handleSignUp = () => {
        console.log("Sign up!");
        // Add sign up function later
    };

    const handleSignIn = () => {
      console.log("Sign In ...Loading...");
      // Add sign up function later
  };

    const handleHeartClick = () => {
        setHeartState("loading");
        setTimeout(() => {
            setHeartState(prev => prev === "empty" ? "filled" : "empty");
        }, 1000);
    };

    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>

        <div className="signup-container">
            <SignUp onClick={handleSignUp} />
        </div>

        <div className="signin-container">
            <SignIn onClick={handleSignIn} />
        </div>

        <div className="tags-container">
            {tags.map((tag) => (
                <Tags 
                    key={tag}
                    label={tag}
                    isSelected={selectedTags.includes(tag)}
                    onClick={() => handleTagClick(tag)}
                />
            ))}
        </div>

        <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
            <Heart size="small" state={heartState} onClick={handleHeartClick} />
            <Heart size="large" state={heartState} onClick={handleHeartClick} />
        </div>
      </main>
    );
}