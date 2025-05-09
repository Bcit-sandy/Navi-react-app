'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  Explore,
  Skip,
  Add,
  Community,
  Event,
  Elipses,
  Report,
  ImageAdd,
  EventNotification,
  RoundNext,
  LeaveEvent,
  SettingsButton,
  ParticipantField,
  EditBioText,
  PlaceholderImg_sm,
  PlaceholderImg_lg,
  PlaceholderImg_event,
  PlaceholderImg_featured,
  PlaceholderImg_profile,
  PlaceholderImg_profile_sm,
  Share,
  PopupSlider,
  SignUp_Input,
  SignUp,
  SignIn,
  Tags,
  Heart,
  Join,
  Post,
  Send,
  Return,
  Follow,
  SearchBar,
  SearchButton,
  EditButton,
  TextSizeRadio,
  ProfileTag,
  EventDateTag,
  CalendarViewButton,
  SuccessStatusBar,
  StudentCategories,
  LocationDropdown,
  Search,
  Profile,
  Comment as CommentButton,
  SingleComment,
  CommentWithReply,
  AnonymousToggle,
  UserCircles,
  Edit,
  Delete,
  HomePageNav,
  TakePhotoButton,
  ChoosePhotoButton,
  Toggle,
  StudentTypeDropdown
} from "./components/buttons";

import {
  Username,
  Comment,
  EventsPostTextField,
  CommunityPostTextField
} from "./components/textfield";

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

      <SuccessStatusBar message="Successfully created event!" />
      <SearchBar onChange={e => {
        setSearchQuery(e.target.value);
        console.log("Searching:", e.target.value);
      }} />
      <SearchButton onClick={() => console.log("Search button clicked:", searchQuery)} />
      <EditButton onClick={() => console.log("Editing...")} />
      <TextSizeRadio value={textSize} onChange={e => {
        setTextSize(e.target.value);
        console.log("Text size changed to:", e.target.value);
      }} />
      <SignUp onClick={() => console.log("Sign up!")} />
      <SignIn onClick={() => console.log("Sign In ...Loading...")} />

      <div className="tags-container">
        {tags.map(tag => (
          <Tags
            key={tag}
            label={tag}
            isSelected={selectedTags.includes(tag)}
            onClick={() => handleTagClick(tag)}
          />
        ))}
      </div>

      <div className="heart-buttons-container">
        <Heart size="small" isLiked={smallHeartLiked} onClick={() => setSmallHeartLiked(!smallHeartLiked)} />
        <Heart size="large" isLiked={largeHeartLiked} onClick={() => setLargeHeartLiked(!largeHeartLiked)} />
      </div>

      <Join isJoined={isJoined} onClick={() => setIsJoined(!isJoined)} />
      <Post onClick={() => console.log("Posting...")} />
      <Send onClick={() => console.log("Sending...")} />
      <Return onClick={() => console.log("Returning...")} />
      <Follow isFollowing={isFollowing} onClick={() => setIsFollowing(!isFollowing)} />

      <ProfileTag
        onClick={() => console.log("Profile tag clicked")}
        title="Username"
        subtitle="Date"
        imageSrc="/image.svg"
      />

      <Username onChange={handleUserChange} />
      <Comment onChange={handleUserChange} />
      <EventDateTag onClick={() => console.log("Event Date:")} month="APR" date="08" />
      <CalendarViewButton onClick={() => console.log("Calendar clicked")} text="Calendar View →" />

      {/* SignUp Inputs */}
      <SignUp_Input label="Email" type="email" name="email" placeholder="Enter email" />
      <SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
      <SignUp_Input label="Re-enter Password" type="password" name="repassword" placeholder="Re-enter password" />

      {/* Extras */}
      <AnonymousToggle />
      <Search />
      <Profile />
      <CommentButton />
      <Edit />
      <Delete />
      <Toggle />
      <HomePageNav />
      <TakePhotoButton />
      <ChoosePhotoButton />
      <UserCircles users={users} />
      <StudentCategories onSelect={category => {
        setSelectedCategory(category);
        console.log("Selected category:", category);
      }} />

      <CommunityPostTextField value={post} onChange={(e) => setPost(e.target.value)} />
      <EventsPostTextField />

      <SingleComment
        author='Jenny Pham'
        date='Mar 31, 2025'
        content="I would say Granville Island. I'd have a lot of fun!!"
      />
      <CommentWithReply />

      <LocationDropdown />
      <StudentTypeDropdown />
      <Share />

      {/* Placeholder images */}
      <PlaceholderImg_profile_sm />
      <PlaceholderImg_profile />
      <PlaceholderImg_event />
      <PlaceholderImg_featured />
      <PlaceholderImg_lg />
      <PlaceholderImg_sm />

      <EditBioText />
      <ParticipantField />
      <SettingsButton />
      <Explore />
      <Skip />
      <Add />
      <Community />
      <Event />
      <Elipses />
      <Report />
      <ImageAdd />
      <EventNotification />
      <RoundNext />
      <LeaveEvent />
    </main>
  );
}
