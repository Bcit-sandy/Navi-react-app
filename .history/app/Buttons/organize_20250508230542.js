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

// List of components to organize
const components = [
    {
        name: 'Explore',
        css: `.explore {
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
}`
    },
    {
        name: 'Skip',
        css: `.skip {
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
}`
    },
    // Add more components here...
];

// Create folders and files for each component
components.forEach(component => {
    createComponentFolder(component.name, component.code, component.css);
}); 