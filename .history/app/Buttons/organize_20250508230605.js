const fs = require('fs');
const path = require('path');

// Function to create component folder and files
function createComponentFolder(componentName, componentCode, cssCode) {
    const folderPath = path.join(__dirname, componentName);
    
    // Create folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    // Create component file
    const componentPath = path.join(folderPath, `${componentName}.js`);
    fs.writeFileSync(componentPath, componentCode);

    // Create CSS file
    const cssPath = path.join(folderPath, `${componentName}.css`);
    fs.writeFileSync(cssPath, cssCode);
}

// Function to extract CSS for a component
function extractCSS(componentName) {
    const cssMap = {
        'Explore': `.explore {
    display: flex;
    align-items: center;
    font-size: var(--h3-font-size);
    font-weight: var(--bold-weight);
    color: var(--white-color);
    background-color: var(--primary-blue-500);
    padding: 20px 20px;
    border-radius: 12px;
    border: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
    cursor: pointer;
}

.explore_arrow {
    margin-left: 10px;
}

.explore-active {
    background-color: var(--primary-blue-300);
}`,
        'Skip': `.skip {
    font-size: var(--bodytext-font-size);
    font-weight: bold;
    color: var(--primary-blue-300);
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.skip-active {
    color: var(--primary-blue-500);
    background-color: transparent;
    border-radius: 4px;
}`,
        'Add': `.add {
    display: flex;
    align-items: center;
    border: 2px solid #000;
    border-radius: 50%;
    padding: 10px;
    background-color: var(--white-color);
    transition: all 0.3s ease;
    cursor: pointer;
}

.add-active {
    background-color: var(--primary-blue-100);
}`
        // Add more CSS mappings here...
    };

    return cssMap[componentName] || '';
}

// Function to extract component code
function extractComponentCode(componentName) {
    const componentMap = {
        'Explore': `"use client";
import { useState } from 'react';
import './Explore.css';

export function Explore() {
    const [isActive, setIsActive] = useState(false);

    return (
        <button
            className={\`explore \${isActive ? "explore-active" : ""}\`}
            onMouseDown={() => setIsActive(true)}
            onMouseUp={() => setIsActive(false)}
            onMouseLeave={() => setIsActive(false)}>
            Let's go explore!
            <img
                className='explore_arrow'
                src='/arrow_right.svg'
                alt='right arrow'
            />
        </button>
    );
}`,
        'Skip': `"use client";
import { useState } from 'react';
import './Skip.css';

export function Skip() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Skip button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={\`skip \${isActive ? "skip-active" : ""}\`}
            onClick={handleClick}>
            Skip
        </button>
    );
}`,
        'Add': `"use client";
import { useState } from 'react';
import './Add.css';

export function Add() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        console.log("Add button clicked, current state:", isActive);
        setIsActive(!isActive);
    };

    return (
        <button
            className={\`add \${isActive ? "add-active" : ""}\`}
            onClick={handleClick}>
            <img
                className='add_button'
                src='/add.svg'
                alt='add button'></img>
        </button>
    );
}`
        // Add more component mappings here...
    };

    return componentMap[componentName] || '';
}

// List of components to organize
const components = [
    'Explore',
    'Skip',
    'Add',
    'Community',
    'Event',
    'Elipses',
    'Report',
    'ImageAdd',
    'EventNotification',
    'RoundNext',
    'LeaveEvent',
    'SettingsButton',
    'ParticipantField',
    'EditBioText',
    'PlaceholderImg_sm',
    'PlaceholderImg_lg',
    'PlaceholderImg_event',
    'PlaceholderImg_featured',
    'PlaceholderImg_profile',
    'PlaceholderImg_profile_sm',
    'Share',
    'PopupSlider',
    'SignUp_Input',
    'SignUp',
    'SignIn',
    'Tags',
    'Heart',
    'Join',
    'Post',
    'Send',
    'Return',
    'Follow',
    'SearchBar',
    'SearchButton',
    'EditButton',
    'TextSizeRadio',
    'ProfileTag',
    'EventDateTag',
    'CalendarViewButton',
    'SuccessStatusBar',
    'StudentCategories',
    'LocationDropdown',
    'Search',
    'Profile',
    'Comment',
    'SingleComment',
    'CommentWithReply',
    'AnonymousToggle',
    'UserCircles',
    'Edit',
    'Delete',
    'HomePageNav',
    'TakePhotoButton',
    'ChoosePhotoButton',
    'Toggle',
    'StudentTypeDropdown'
];

// Create folders and files for each component
components.forEach(componentName => {
    const componentCode = extractComponentCode(componentName);
    const cssCode = extractCSS(componentName);
    createComponentFolder(componentName, componentCode, cssCode);
}); 