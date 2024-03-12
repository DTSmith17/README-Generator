// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: If there is no license, return an empty string
//maps through selected badges and renders the correct badges
function renderLicenseBadge(licenses) {
  const badges = licenses.map((license) => {
    if (license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    if (license === "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    if (license === "BSD 3-Clause") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    }
    if (license === "Unlicense") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    }
    if (license === "Eclipse Public License 1.0") {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    }
    if (license === "GNU GPL v3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    }
    if (license === "IBM") {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    }
    if (license === "Mozilla Public License (MPL)") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    }
  });
  return badges.join(" ");
}

function createTableOfContentsLinks(tocTitles) {
  const links = tocTitles.map((title) => {
    return `[${title}](#${title})`;
  });
  return links.join("<br>");
}

// TODO: Create a function to generate markdown for README
//Generates markdown content based on user data. Only adds optional sections if the user decides to include section in readme
function generateMarkdown(data) {
  let markdown = `# ${data.title}`;
  if (data.license) {
    markdown += `
  ${renderLicenseBadge(data.license)}
    `;
  }

  markdown += `
  ## Description
${data.description}
## Table Of Contents
${createTableOfContentsLinks(data.tableOfContents)}`;

  if (data.installation) {
    markdown += `
  ## Installations 
  ${data.installation}`;
  }

  if (data.usage) {
    markdown += `
  ## Usage
  ${data.usage}`;
  }

  if (data.license) {
    markdown += `
## License
${data.license}`;
  }

  if (data.contributors) {
    markdown += `
## Contributors
${data.contributors}`;
  }

  if (data.testsDescription) {
    markdown += `
## Testing
${data.testsDescription}`;
  }

  if (data.gitHubUser) {
    markdown += `
## Questions
https://github.com/${data.gitHubUser}`;
  }

  if (data.email) {
    markdown += `
## Questions
Reach me at:
${data.email}`;
  }

  return markdown;
}

module.exports = generateMarkdown;
