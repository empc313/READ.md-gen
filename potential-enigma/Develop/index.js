// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions for user input to generate a READme file
const questions = [
  //Question for Title
  {
    type: "input",
    name: "title",
    message: "What would you like to name your repository?",
  },
  //Question for Description
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project.",
  },
  //Question for Installation
  {
    type: "input",
    name: "installation",
    message: "Enter software needed to install, and/or commands for program",
  },
  //Question for Usage
  {
    type: "input",
    name: "usage",
    message: "Enter how this repository can be used.",
  },
  //Question for License
  {
    type: "list",
    name: "license",
    message: "Select a license for this READme.",
    choices: ["Apache 2.0", "GNU GPLv3.0", "MIT", "Mozilla Public 2.0", "None"],
  },
  //Question for Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can users contribute?",
  },
  //Question for Tests
  {
    type: "input",
    name: "tests",
    message: "Enter testing instructions for this repository",
  },
  //Questions- github
  {
    type: "input",
    name: "userName",
    message: "Enter GitHub username.",
  },
  //Questions- email address
  {
    type: "input",
    name: "email",
    message: "Enter email address associated with your GitHub",
  },
];

//a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName);
}

//function to initialize app and calls the generate markdown function
function init() {
  inquirer.prompt(questions).then((data) => {
    const template = generateMarkdown(data);
    console.log("Generating Markdown");
    fs.writeFileSync("README.md", template);
  });
}

// Function call to initialize app
init();
