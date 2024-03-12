// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//Inputs required for readme. And only prompts questions the user choses to include
const questions = [
  {
    type: "input",
    message: "What is the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a description of you project.",
    name: "description",
  },
  {
    type: "checkbox",
    message: "Provide a Table of Contents.",
    name: "tableOfContents",
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributors",
      "Testing",
      "Questions",
    ],
  },
  {
    type: "input",
    message: "Any Installation required?",
    name: "installation",
    //only prompts the user with question when chosen to be included in table of contents
    when: (answers) => answers.tableOfContents.includes("Installation"),
  },
  {
    type: "input",
    message: "How is this project to be used",
    name: "usage",
    when: (answer) => answer.tableOfContents.includes("Usage"),
  },
  {
    type: "checkbox",
    message: "Any license required?",
    name: "license",
    choices: [
      "MIT",
      "Apache",
      "BSD 3-Clause",
      "Unlicense",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
      "IBM",
      "Mozilla Public License (MPL)",
    ],
    when: (answers) => answers.tableOfContents.includes("License"),
  },
  {
    type: "input",
    message: "Include Conributers to the Project.",
    name: "contributors",
    when: (answers) => answers.tableOfContents.includes("Contributors"),
  },
  {
    type: "input",
    message: "Describe Test.",
    name: "testsDescription",
    when: (answers) => answers.tableOfContents.includes("Testing"),
  },
  {
    type: "input",
    message: "Enter GitHub Username.",
    name: "gitHubUser",
    when: (answers) => answers.tableOfContents.includes("Questions"),
  },
  {
    type: "input",
    message: "Enter Email Address.",
    name: "email",
    when: (answers) => answers.tableOfContents.includes("Questions"),
  },
];

// TODO: Create a function to write README file
//
function writeToFile(fileName, data) {
  // Generate markdown data based on user input and write data to a filename
  let markdownData = generateMarkdown(data);
  fs.writeFile(fileName, markdownData, (err) =>
    err ? console.error(err) : console.log("File Written")
  );
}

// TODO: Create a function to initialize app
function init() {
  // Prompt the user with questions using Inquirer
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    // Write user responses to a README.md file
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
