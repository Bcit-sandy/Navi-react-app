'use client';
import { useState } from "react";

export default function Page() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const [post, setPost] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

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
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Navi App</h1>

      {/* Search Section */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <button 
          onClick={() => console.log("Search:", searchQuery)}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Tags Section */}
      <div className="mb-4">
        <h2 className="text-xl mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded ${
                selectedTags.includes(tag) 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Post Section */}
      <div className="mb-4">
        <h2 className="text-xl mb-2">Create Post</h2>
        <textarea
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder="Write your post..."
          className="w-full border p-2 rounded"
          rows="4"
        />
        <button 
          onClick={() => console.log("Posting:", post)}
          className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Post
        </button>
      </div>

      {/* User Input Section */}
      <div className="mb-4">
        <h2 className="text-xl mb-2">User Information</h2>
        <input
          type="text"
          placeholder="Username"
          value={userQuery}
          onChange={handleUserChange}
          className="border p-2 rounded w-full mb-2"
        />
      </div>

      {/* Category Selection */}
      <div className="mb-4">
        <h2 className="text-xl mb-2">Categories</h2>
        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            console.log("Selected category:", e.target.value);
          }}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a category</option>
          <option value="student">Student</option>
          <option value="alumni">Alumni</option>
          <option value="faculty">Faculty</option>
        </select>
      </div>
    </main>
  );
}
