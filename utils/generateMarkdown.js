// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if (!license) {
    return ``;
  }
  else {
    if (license === 'MIT License') {
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'GNU General Public License (GPL)') {
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Apache License 2.0') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'BSD Licenses') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Creative Commons Licenses') {
      licenseBadge = `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Mozilla Public License 2.0 (MPL 2.0)') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](${renderLicenseLink(license)})`;
    } else if (license === 'Eclipse Public License (EPL)') {
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](${renderLicenseLink(license)})`;
    }
    return licenseBadge
  }
  ;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if(license === 'MIT License') {
    licenseLink = 'https://opensource.org/licenses/MIT';
  }
  else if (license === 'GNU General Public License (GPL)') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  else if (license === 'Apache License 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0';
  }
  else if (license === 'BSD Licenses') {
    licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
  }
  else if (license === 'Creative Commons Licenses') {
    licenseLink = 'https://creativecommons.org/licenses/by/4.0/';
  }
  else if (license === 'Mozilla Public License 2.0 (MPL 2.0)') {
    licenseLink = 'https://opensource.org/licenses/MPL-2.0';
  }
  else if (license === 'Eclipse Public License (EPL)') {
    licenseLink = 'https://opensource.org/licenses/EPL-1.0';
  }
  return licenseLink;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  }
  else {
    return `This project is licensed under the ${license}. To learn more about this means, click the license button at the top.`;
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table Of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}
  
## Tests

${data.tests}

## Questions

GitHub Profile: https://github.com/${data.github}\n
If you have any additional questions, feel free to contact me at: ${data.email} 
`;
}

export default generateMarkdown;
