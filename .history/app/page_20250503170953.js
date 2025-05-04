'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import * as UI from "./_ui/buttons";

import {
  Username,
  Comment,
  EventsPostTextField,
  CommunityPostTextField
} from "./_ui/textfield";

export default function Page() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [smallHeartLiked, setSmallHeartLiked] = useState(false);
  const [largeHeartLiked, setLargeHeartLiked] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [textSize, setTextSize] = useState("medium");
  const [userQuery, setUserQuery] = useState("");
  const [post, setPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  const tags = [
    "Sports", "Outdoor Activities", "Movies", "Music", "Video Games",
    "Cafe Hopping", "Reading", "Arts", "Food", "Dancing", "Learning", "Board Games"
  ];

  const handleTagClick = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleUserChange = (e) => {
    setUserQuery(e.target.value);
    console.log("USERNAME:", e.target.value);
  };

  return (
    <main>
      <h1>ALL COMPONENTS DEMO</h1>

      <UI.SuccessStatusBar message="Successfully created event!" />
      <UI.SearchBar onChange={e => {
        setSearchQuery(e.target.value);
        console.log("Searching:", e.target.value);
      }} />
      <UI.SearchButton onClick={() => console.log("Search button clicked:", searchQuery)} />
      <UI.EditButton onClick={() => console.log("Editing...")} />
      <UI.TextSizeRadio value={textSize} onChange={e => {
        setTextSize(e.target.value);
        console.log("Text size changed to:", e.target.value);
      }} />
      <UI.SignUp onClick={() => console.log("Sign up!")} />
      <UI.SignIn onClick={() => console.log("Sign In ...Loading...")} />

      <div className="tags-container">
        {tags.map(tag => (
          <UI.Tags
            key={tag}
            label={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </div>

      <div className="heart-buttons-container">
        <UI.Heart size="small" isLiked={smallHeartLiked} onClick={() => setSmallHeartLiked(!smallHeartLiked)} />
        <UI.Heart size="large" isLiked={largeHeartLiked} onClick={() => setLargeHeartLiked(!largeHeartLiked)} />
      </div>

      <UI.Join isJoined={isJoined} onClick={() => setIsJoined(!isJoined)} />
      <UI.Post onClick={() => console.log("Posting...")} />
      <UI.Send onClick={() => console.log("Sending...")} />
      <UI.Return onClick={() => console.log("Returning...")} />
      <UI.Follow isFollowing={isFollowing} onClick={() => setIsFollowing(!isFollowing)} />

      <UI.ProfileTag
        onClick={() => console.log("Profile tag clicked")}
        title="Username"
        subtitle="Date"
        imageSrc="/image.svg"
      />

      <Username onChange={handleUserChange} />
      <Comment onChange={handleUserChange} />
      <UI.EventDateTag onClick={() => console.log("Event Date:")} month="APR" date="08" />
      <UI.CalendarViewButton onClick={() => console.log("Calendar clicked")} text="Calendar View →" />

      {/* SignUp Inputs */}
      <UI.SignUp_Input label="Email" type="email" name="email" placeholder="Enter email" />
      <UI.SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
      <UI.SignUp_Input label="Re-enter Password" type="password" name="repassword" placeholder="Re-enter password" />

      {/* Extras */}
      <UI.AnonymousToggle />
      <UI.Search />
      <UI.Profile />
      <UI.Comment />
      <UI.Edit />
      <UI.Delete />
      <UI.Toggle />
      <UI.HomePageNav />
      <UI.TakePhotoButton />
      <UI.ChoosePhotoButton />
      <UI.UserCircles users={users} />
      <UI.StudentCategories onSelect={category => {
        setSelectedCategory(category);
        console.log("Selected category:", category);
      }} />

      <CommunityPostTextField value={post} onChange={(e) => setPost(e.target.value)} />
      <EventsPostTextField />

      <UI.SingleComment
        author='Jenny Pham'
        date='Mar 31, 2025'
        content="I would say Granville Island. I'd have a lot of fun!!"
      />
      <UI.CommentWithReply />

      <UI.LocationDropdown />
      <UI.StudentTypeDropdown />
      <UI.Share />

      {/* Placeholder images */}
      <UI.PlaceholderImg_profile_sm />
      <UI.PlaceholderImg_profile />
      <UI.PlaceholderImg_event />
      <UI.PlaceholderImg_featured />
      <UI.PlaceholderImg_lg />
      <UI.PlaceholderImg_sm />

      <UI.EditBioText />
      <UI.ParticipantField />
      <UI.SettingsButton />
      <UI.Explore />
      <UI.Skip />
      <UI.Add />
      <UI.Community />
      <UI.Event />
      <UI.Elipses />
      <UI.Report />
      <UI.ImageAdd />
      <UI.EventNotification />
      <UI.RoundNext />
      <UI.LeaveEvent />
    </main>
  );
}
