// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
const fileName = 'READMEsample.md'
// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "What's is the description of your project?",
    "What are the installation instructions for this project?",
    "What is the usage information?",
    "What are the contribution guidelines?",
    "What are some of the test instructions?",
    "What is your preferred license?",
    "What is your GitHub username?",
    "What is your Email address?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,(data), (err) => 
        err ? console.error(err) : console.log('Your data has been logged!')); 
}

// TODO: Create a function to initialize app
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
            type: 'list',
            message: questions[6],
            choices: ['MIT License', 'GNU General Public License (GPL)', 'Apache License 2.0', 'BSD Licenses', 'Creative Commons Licenses', 'Mozilla Public License 2.0 (MPL 2.0)', 'Eclipse Public License (EPL)', 'none'], //check for more licenses
            name: 'license',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[8],
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
