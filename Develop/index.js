const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        }, 
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is your projects name?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project',
          },
          {
            type: 'checkbox',
            name: 'licenses',
            message: 'What kind of licenses should your project have?',
            choices: ['', '', '', '', '', '', '']
          },
          {
            type: 'input',
            name: 'dependencies',
            message: 'What command should be run to install dependencies?',
          },
          {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
          },
          {
            type: 'input',
            name: 'usage',
            message: 'What does the user need to know about using the Repo?',
          },
          {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the repo?',
          },

    ]);
};
 


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

questions();