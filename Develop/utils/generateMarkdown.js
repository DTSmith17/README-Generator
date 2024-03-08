// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  const badges = licenses.map((license) => {
    if (license === 'MIT') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }

  })
  return badges.join('');
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return `## License 
    .${license}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table Of Contents
${data.tableOfContents}
## Installations
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributers
${data.contributors}
## Test Description
${data.testsDescription}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
