// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
  } else if (license === "GNU GPLv3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]";
  } else if (license === "Mozilla Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)]";
  } else if (license === "None") {
    return "[![License: None](https://img.shields.io/badge/None----lightgrey)]";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  # ${data.license}
  ${renderLicenseBadge(license)}
  ## Table of Contents
  [Installation](#-Installation)
  [Usage](#-Usage)
  [License](#-Installation)
  [Contributing](#-Contributing)
  [Tests](#-Tests)
  [Questions](#-Info)
 
# Installation 
${data.installation}
# Usage 
${data.usage}
# Contributing 
${data.contributing}
# Tests 
${data.tests}
# Contact Information
Github Username- 
${data.userName}
Email- 
${data.email}
`;
}
module.exports = generateMarkdown;
