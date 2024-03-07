// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of you project',
        name: 'description',
    },
    {
        type: 'checkbox',
        message: 'Provide a Table of Contents',
        name: 'TableOfContents',
        choices: ['Installation', 'Usage', 'License', 'Constirbutors', 'Tests Description']
    },
    {
        type: 'input',
        message: 'Any Installation required?',
        name: 'installation',
        when: (answer) => answer.TableOfContents.includes('Installation'),
    },
    {
        type: 'input',
        message: 'How is this project to be used',
        name: 'usage',
        when: (answer) => answer.TableOfContents.includes('usage'),
    },
    {
        type: 'checkbox',
        message: 'Any license required?',
        name: 'license',
        choices: ['MIT', 'Apache', 'Berkeley Source Distribution (BSD)', 'Unlicense', 'General Pblic License (GPL)', 'Affero GPL (AGPL)', 'Lesser General Public License (LGPL)', 'Eclipse Public License (EPL)','Mozilla Public License (MPL)'],
        when: (answer) => answer.TableOfContents.includes('license'),
    },
    {
        type: 'input',
        message: 'All Conributers to the Project',
        name:'contributors',
        when: (answer) => answer.TableOfContents.includes('contributors'),
    },
    {
        type: 'input',
        message: 'Describe Test.',
        name: 'testsDescription',
        when: (answer) => answer.TableOfContents.includes('testsDescription'),
    },
    {
        type: 'input',
        message: 'Any Questions?',
        name: 'questions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let markdownData = generateMarkdown(data);
fs.writeFile(fileName, markdownData, (err) =>
err ? console.error(err) : console.log('File Written')
)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response);
        writeToFile("README.md", response);
    })

}

// Function call to initialize app
init();
