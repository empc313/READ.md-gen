// a function that returns a license badge based on which license is passed in
// a function that returns the license link

function renderLicenseBadge(license) {
  if (license === "Apache 2.0") {
    return "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GNU GPLv3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GNU%20GPLv3.0-green)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-red)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla Public 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-Mozilla%20Public%202.0-yellow)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "None") {
    return "[![License: None](https://img.shields.io/badge/License-None-lightgrey)";
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}

  ## Table of Contents
  [Installation](#-Installation)
  [Usage](#-Usage)
  [License](#-Installation)
  [Contributing](#-Contributing)
  [Tests](#-Tests)
  [Questions](#-Info)
 
## Installation 
${data.installation}
## Usage 
${data.usage}
## Contributing 
${data.contributing}
## Tests 
${data.tests}
## Contact Information
#Github Username- 
${data.userName}
#Email- 
${data.email}
`;
}
module.exports = generateMarkdown;
