import Image from "next/image";
import { Explore, Skip, Add, Community, Event, Elipses, Report, ImageAdd } from "./_ui/buttons";



export default function Page() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>Hello, world!</h1>
        <p>This is a dummy page to test if everything is working correctly.</p>
        <Explore />
        <Skip />
        <Add />
        <Community />
        <Event />
        <Elipses />
        <Report />
        <ImageAdd />
      </main>
    );
  }