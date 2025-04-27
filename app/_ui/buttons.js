
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

// Elipses and Report
export function Elipses() {
  return <button className="elipses"><img className="elipses_icon" src="/elipses.svg"></img></button>
}

export function Report() {
  return (
    <div className="report">
      <div className="report_heading">
        <p className="report_headingText">Report</p>
        <img className="report_icon" src="report.svg"></img>
      </div>
    <div className="report_options">
      <button className="report_button">Not interested</button>
      <button className="report_button">Spam</button>
      <button className="report_button">Inappropriate content</button>
      <button className="report_button">False information</button>
      <button className="report_buttonLast">Hate speech, discrimination</button>
      </div>
    </div>
  );
}

// NavBar - template

// Profile

// Create Event

// Setting

//Exports
// buttons.js
// export const Navbar = () => <nav>Navbar</nav>;

