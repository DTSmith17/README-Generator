# README Generator

Access repository here: [README Generator](https://github.com/DTSmith17/README-Generator.git)

## Description

This is a command-line application that generates a high-quality, professional README.md file for your project. It accepts user input for information about your application repository and automatically organizes it into sections such as Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions.

## Features

Interactive Prompt:

- Users are prompted to enter the title, description, and table of contents of the README when the application is executed.

Customizable Sections:

- Users can select which sections to include in the README via a table of contents, and then input content for each selected section.

![User prompt](<images/Screenshot 2024-03-10 183242.png>)

Dynamic README Generation:

- Information entered by the user, such as description, installation instructions, usage information, contribution guidelines, and test instructions, is automatically added to the corresponding sections of the README.

<kbd>![alt text](<images/Screenshot 2024-03-10 190135.png>)</kbd>

License Badge Integration:

- Users can choose a license for their application from a list of options, and a badge for that license is added near the top of the README. Additionally, a notice is included in the License section explaining the chosen license.

![alt text](<images/Screenshot 2024-03-10 185646.png>)

GitHub Integration:

- Users can input their GitHub username, which is then added to the Questions section with a link to their GitHub profile.

Contact Information:

- Users can input their email address, which is added to the Questions section along with instructions on how to reach them with additional questions.

Interactive Table of Contents:

- Clickable links in the Table of Contents allow users to navigate directly to the corresponding section of the README for easy access to information.

## Usage

To run the application use the following command:

```
node index.js
```

Follow the prompts to enter information about your project, including the title, description, installation instructions, usage information, contribution guidelines, test instructions, and your preferred license.

For a video walk through click here, [README Generator video walk through.](https://drive.google.com/file/d/1VvsE0Gz-Atc9Ys7o6w58qpBSJ3Ezi1Nq/view)
