const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
        default: "Knuts839"
    },
    {
        type: "input",
        name: "contactInformation",
        message: "What is your contact information?",
        default: ["ravi...@gmail.com", "https://github.com/Knuts839"]
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        default: "ravi...@gmail.com"
    },
    {
        type: "list",
        name: "title",
        message: "What is your project's name?",
        choices: ["Code-Re-Factor", "Portfolio", "Password-Generator", "CodingQuizRepo", "WeatherApplication", "DailyPlanner", "ReadMeGenerator"],
        default: "ReadMeGenerator"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project",
        default: "I simply wanted my READMES to be more informative and professional. I want my READMES to be as clear to me a year from now as they are now."
    },
    {
        type: "list",
        name: "license",
        message: "These are some license choices please choose one?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
        default: "You will need node.js, be able to init the project using npm init, and then install the dependencies encased in the package.json using npm i"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
        default: "This is currently a solo project and contribution is not allowed at this time."
    },
    {
        type: "input",
        name: "finalThoughts",
        message: "What are some final thoughts about your project and areas for future development?",
        default: "Nothing currently comes to mind."
    }
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
        .then((inquirerResponses) => {
            console.log("Generating README...");
            writeToFile("README.md", generateMarkdown({...inquirerResponses }));
        })
}

init();