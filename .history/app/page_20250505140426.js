'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import {
  SuccessStatusBar,
  SearchBar,
  SearchButton,
  EditButton,
  TextSizeRadio,
  SignUp,
  SignIn,
  Tags,
  Heart,
  Join,
  Post,
  Send,
  Return,
  Follow,
  ProfileTag,
  SignUp_Input,
  AnonymousToggle,
  Search,
  Profile,
  Comment,
  Edit,
  Delete,
  Toggle,
  HomePageNav,
  TakePhotoButton,
  ChoosePhotoButton,
  UserCircles,
  StudentCategories,
  SingleComment,
  CommentWithReply,
  LocationDropdown,
  StudentTypeDropdown,
  Share,
  PlaceholderImg_profile_sm,
  PlaceholderImg_profile,
  PlaceholderImg_event,
  PlaceholderImg_featured,
  PlaceholderImg_lg,
  PlaceholderImg_sm,
  EditBioText,
  ParticipantField,
  SettingsButton,
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
  EventDateTag,
  CalendarViewButton
} from "./components/buttons/buttons";

import {
  Username,
  Comment as CommentField,
  EventsPostTextField,
  CommunityPostTextField
} from "./components/textfield/textfield";

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
      
      <div className="components-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
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

        <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {tags.map(tag => (
            <Tags
              key={tag}
              label={tag}
              isSelected={selectedTags.includes(tag)}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </div>

        <div className="heart-buttons-container" style={{ display: 'flex', gap: '20px' }}>
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
        <CommentField onChange={handleUserChange} />
        <EventDateTag onClick={() => console.log("Event Date:")} month="APR" date="08" />
        <CalendarViewButton onClick={() => console.log("Calendar clicked")} text="Calendar View →" />

        {/* SignUp Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <SignUp_Input label="Email" type="email" name="email" placeholder="Enter email" />
          <SignUp_Input label="Password" type="password" name="password" placeholder="Enter password" />
          <SignUp_Input label="Re-enter Password" type="password" name="repassword" placeholder="Re-enter password" />
        </div>

        {/* Extras */}
        <AnonymousToggle />
        <Search />
        <Profile />
        <Comment />
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <PlaceholderImg_profile_sm />
          <PlaceholderImg_profile />
          <PlaceholderImg_event />
          <PlaceholderImg_featured />
          <PlaceholderImg_lg />
          <PlaceholderImg_sm />
        </div>

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
      </div>
    </main>
  );
}
