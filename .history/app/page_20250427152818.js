import Image from "next/image";
import {Tags} from "./_ui/buttons";

export default function Page() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>TESTING COMPONENTS</h1>
        <Tags>Example Tag</Tags>
      </main>
    );
}