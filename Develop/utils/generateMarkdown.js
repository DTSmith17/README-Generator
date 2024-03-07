// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return `## Liscense
${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.descritption}
## Table Of Contents
${data.tableOfContents}
## Installations
${data.installations}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributers
${data.contributers}
## Test Description
${data.testDescription}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
