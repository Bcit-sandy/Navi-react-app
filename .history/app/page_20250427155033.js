import Image from "next/image";
import { Tags } from "./_ui/buttons";
import { useState } from "react";

export default function Page() {
    const [selectedTags, setSelectedTags] = useState([]);
    const tags = ["Technology", "Sports", "Music", "Art", "Food"];

    const handleTagClick = (tag) => {
        setSelectedTags(prev => {
            if (prev.includes(tag)) {
                return prev.filter(t => t !== tag);
            } else {
                return [...prev, tag];
            }
        });
    };

    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>
        <div style={{ 
            display: 'flex', 
            gap: '10px', 
            flexWrap: 'wrap',
            marginTop: '20px'
        }}>
            {tags.map((tag) => (
                <Tags 
                    key={tag}
                    isSelected={selectedTags.includes(tag)}
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </Tags>
            ))}
        </div>
      </main>
    );
}