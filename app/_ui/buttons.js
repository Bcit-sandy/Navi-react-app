
import "./module.button.css";
import "../globals.css";



// Sign up
// Onboarding

// Let's go Explore | big button
export function Explore() {
    return <button className="explore">Let's go explore!<img className="explore_arrow" src="/arrow_right.svg"></img></button>;
  }

// small skip
export function Skip(){
  return <button className="skip">Skip</button>
}


// HomePage

// Add post 
export function Add() {
  return <button className="add"><img className="add_button" src="/add.svg"></img></button>
}

export function Community () {
  return <button className="community"><img className="community_icon" src="/community.svg"></img>Create Community Post</button>
}

export function Event () {
  return <button className="event"><img className="event_icon" src="/event.svg"></img>Create Event Post</button>
}



// NavBar - template

// Profile

// Create Event

// Setting

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;

