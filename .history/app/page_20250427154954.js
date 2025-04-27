import Image from "next/image";
import { Tags } from "./_ui/buttons";
import { useState } from "react";

export default function Page() {
    const [isSelected, setIsSelected] = useState(false);

    const handleTagClick = () => {
        setIsSelected(!isSelected);
    };

    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>
        <Tags 
            isSelected={isSelected}
            onClick={handleTagClick}
        >
            Example Tag
        </Tags>
      </main>
    );
}