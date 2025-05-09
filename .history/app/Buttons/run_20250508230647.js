const { exec } = require('child_process');
const path = require('path');

// Run the setup script
const setupScript = path.join(__dirname, 'setup.js');

exec(`node ${setupScript}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing setup script: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`Setup script stderr: ${stderr}`);
        return;
    }
    console.log('Setup completed successfully!');
 