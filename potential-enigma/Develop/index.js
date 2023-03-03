//  packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//An array of questions for user input to generate a READme file
//Need to validate the inpust somehow
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
  //Question for Table of Contents
  {
    type: "input",
    name: "tableContents",
    message: "Enter your Table of Contents.",
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
    choices: [
      "Apache 2.0",
      "GNU GPLv3.0",
      "MIT",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0",
      "Eclipse Public 2.0",
      "GNU AGPLv3.0",
      "GNU GPLv2.0",
      "GNU LGPLv2.1",
      "Mozilla Public 2.0",
      "The Unlicense",
    ],
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName);
}

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.createPromptModule(questions)
// }

// Function call to initialize app
// init();
console.log(questions)
