// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const markdown = require("./utils/generateMarkdown.js");
const { default: axios } = require('axios');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter your project description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter your installation instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter the usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter the contribution guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter the test intructions:',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Choose your license for the application:',
        name: 'license',
        choices: ["MIT", "Apache", "Mozilla_PL_2", "Perl"],
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err?console.log(err):console.log('Successfully Generated ReadMe!')
    })
}

// TODO: Create a function to initialize app
const init = async () => {
    try{
        let info = await inquirer.prompt(questions)
        let thub = await axios.get(`https://api.github.com/users/${info.username}`) ;
        let result = generateMarkdown(info);
        writeToFile('generatedReadMe.md', result)
    }catch(err){
        console.log(err)
    }
} 

// Function call to initialize app
init();
