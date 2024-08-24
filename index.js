// Packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
const fileName = 'GeneratedREADME.md';

// Array of questions for user input
const questions = [
    "What is your project title?",
    "What is the description of your project?",
    "What are the installation instructions for this project?",
    "What are the instructions for usage?",
    "What are the contribution guidelines?",
    "What are some of the test instructions?",
    "Would you like to include a license?",
    "What license would you like to include?",
    "What is your GitHub username?",
    "What is your Email address?",
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,(data), (err) => 
        err ? console.error(err) : console.log('SUCCESS! Your README has been generated')); 
}

// Function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contributing',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'tests',
        },
        {
            type: 'confirm',
            message: questions[6],
            name: 'confirmLicense',
            default: false,
        },
        {
            type: 'list',
            message: questions[7],
            choices: ['MIT License', 'GNU General Public License (GPL)', 'Apache License 2.0', 'BSD Licenses', 'Creative Commons Licenses', 'Mozilla Public License 2.0 (MPL 2.0)', 'Eclipse Public License (EPL)'], 
            name: 'license',
            when: ({confirmLicense}) => {
                if (confirmLicense) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: questions[8],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'email',
        },
    ])
    
    .then ((data) => {
        const markdown = generateMarkdown(data);
        writeToFile(fileName, markdown);      
    })  
   
}

// Function call to initialize app
init();
