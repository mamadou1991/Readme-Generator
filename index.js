const fs = require("fs")
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown.js");
const promptProject = () => {
    
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project? (Required)',
          validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'Username',
            message: 'what is your Github username? (Required)',
            validate: userNameInput => {
              if (userNameInput) {
                return true;
              } else {
                console.log('You need to enter your Github username!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Give a detailed description of your project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What do you need to Install to run this app? (Required)',
            validate: InstallationInput => {
              if (InstallationInput) {
                return true;
              } else {
                console.log('What Do you need to run this app?!')
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Add The table of content (Required)',
            validate: TableofContentsInput => {
              if (TableofContentsInput) {
                return true;
              } else {
                console.log('You need to add a table of content!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Give Instructions on how to use this app',
            validate: UsageInput => {
              if (UsageInput) {
                return true;
              } else {
                console.log('You need to enter instructions on how to use this app!');
                return false;
              }
            }
        },
        {
          
          type: 'checkbox',
          name: 'license',
          message: 'What did licence is being used in this project? (Check the one that apply)',
          choices: ['MIT', 'ISC', 'BSD']
          
          
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'who helped to make this app?',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('You need to enter contibutors!');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the command line to test this app? (Required)',
            validate: descriptionInput => {
              if (descriptionInput) {
                return true;
              } else {
                console.log('Enter command line needed to test the app');
                return false;
              }
            }
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter questions for more Information (Required)',
           
        },
        {
          type: 'input',
          name: 'Email',
          message: 'What is your email address? (Required)',
          validate: EmailInput => {
            if (EmailInput) {
              return true;
            } else {
              console.log('Enter your Email address');
              return false;
            }
          }
      },
      ])


    .then((data) => {
        const page = generateMarkdown(data);

     fs.writeFile('./README.md', page , err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out README.md in this directory to see it!');
      });
    });
    }

    promptProject();