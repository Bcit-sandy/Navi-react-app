'use client';
import "../globals.css";
import * as Buttons from "../Buttons/allbuttons"; // Adjust import path if necessary

export default function Page() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Test AddOptions Component</h1>

      {/* Testing AddOptions component */}
      <Buttons.AddOptions
        icon="/community.svg"
        value="Create Community Post"
        bgColor="var(--white)"
        color="var(--black)"
      />
      <Buttons.AddOptions
        icon="/event.svg"
        value="Create Event Post"
        bgColor="var(--blue)"
        color="var(--white)"
      />
    </main>
  );
}
